from django.contrib.auth.models import BaseUserManager

from asterix.apps.common import models as core_models


class UserManager(core_models.CoreManager, BaseUserManager):
    use_in_migrations = True

    def get_queryset(self):
        return core_models.CoreQuerySet(self.model, using=self._db)

    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError("Users must gave an email address")

        user = self.model(email=email, **kwargs)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, **kwargs):
        user = self.create_user(**kwargs)
        user.is_admin = True
        user.is_superuser = True
        user.is_active = True
        user.save(using=self._db)

        return user
