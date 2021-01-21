from django.contrib.auth import get_user_model, authenticate
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    is_staff = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = get_user_model()
        fields = ("pk", "first_name", "last_name", "email", "password", "is_staff")
        extra_kwargs = {"password": {"write_only": True}}

    def get_is_staff(self, obj):
        return obj.is_staff

    def validate_email(self, value):
        norm_email = value.lower()
        if get_user_model().objects.filter(email=norm_email).exists():
            raise serializers.ValidationError("user with this email address already exists.")
        return norm_email

    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)
        # send_welcome_mail(user)
        return user

    def update(self, obj, validated_data):
        password = validated_data.pop("password", None)
        if password:
            obj.set_password(password)
        return super().update(obj, validated_data)


class CustomAuthTokenSerializer(serializers.Serializer):
    """
    Modified from rest_framework.authtoken.serializers.AuthTokenSerializer
    to accept email field instead of username
    """

    email = serializers.CharField(label=_("Email"))
    password = serializers.CharField(label=_("Password"), style={"input_type": "password"}, trim_whitespace=False)

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        if email and password:
            user = authenticate(request=self.context.get("request"), email=email.lower(), password=password)

            # The authenticate call simply returns None for is_active=False
            # users. (Assuming the default ModelBackend authentication
            # backend.)
            print("###################################################")
            print(user)
            print("##############################################")
            if not user:
                msg = _("Invalid email or password")
                raise serializers.ValidationError(msg, code="authorization")
        else:
            msg = _('Must include "email" and "password".')
            raise serializers.ValidationError(msg, code="authorization")

        attrs["user"] = user
        return attrs
