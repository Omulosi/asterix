from django.contrib.auth import get_user_model
from rest_framework import generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from .serializers import (  # ForgotPasswordSerializer,; ResetPasswordSerializer,
    CustomAuthTokenSerializer,
    UserSerializer,
)


class Me(generics.RetrieveUpdateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.create(user_id=response.data["pk"])
        return Response({"token": token.key, "userId": token.user_id}, status=status.HTTP_201_CREATED)


class UserList(generics.ListAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAdminUser,)


class UserLogin(ObtainAuthToken):

    serializer_class = CustomAuthTokenSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data["token"])
        return Response({"token": token.key, "userId": token.user_id})


class LogoutView(generics.GenericAPIView):

    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        # response = LoginService.logout(request)
        # return response
        pass
