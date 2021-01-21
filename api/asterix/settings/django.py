"""
Django settings for asterix project.

Generated by 'django-admin startproject' using Django 2.1.

For more information on this file, see
https://docs.djangoproject.com/en/{{ docs_version }}/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/{{ docs_version }}/ref/settings/
"""

import os

from .environment import env

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def rel(*path):
    return os.path.join(BASE_DIR, *path)


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/{{ docs_version }}/howto/deployment/checklist/

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool("ASTERIX_DEBUG")

ALLOWED_HOSTS = env.list("ASTERIX_ALLOWED_HOSTS", default=[])

SECRET_KEY = env.str("ASTERIX_SECRET_KEY")

# Application definition

INSTALLED_APPS = [
    # django apps
    "jet",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.gis",
    # 3rd party apps
    "rest_framework",
    "rest_framework_gis",
    "corsheaders",
    "django_filters",
    "workers",
    "rest_framework.authtoken",
    "leaflet",
    # "drf-yasg",
    # local apps
    "asterix.apps.common.apps.CommonConfig",
    "asterix.apps.account.apps.AccountConfig",
    "asterix.apps.markers.apps.MarkersConfig",
    "asterix.apps.mail.apps.MailConfig",
    "asterix.apps.shapefiles.apps.ShapefilesConfig",
] + env.list("ASTERIX_DEV_INSTALLED_APPS", default=[])

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
] + env.list("ASTERIX_DEV_MIDDLEWARE", default=[])

ROOT_URLCONF = "asterix.urls"

TEMPLATES = [{
    "BACKEND": "django.template.backends.django.DjangoTemplates",
    "DIRS": [rel("templates/")],
    "APP_DIRS": True,
    "OPTIONS": {
        "context_processors": [
            "django.template.context_processors.debug",
            "django.template.context_processors.request",
            "django.contrib.auth.context_processors.auth",
            "django.contrib.messages.context_processors.messages",
        ]
    },
}]

WSGI_APPLICATION = "asterix.wsgi.application"

# Database
# https://docs.djangoproject.com/en/{{ docs_version }}/ref/settings/#databases

DATABASES = {"default": env.db("ASTERIX_DATABASE_URL")}

# Password validation
# https://docs.djangoproject.com/en/{{ docs_version }}/ref/settings/#auth-password-validators

AUTH_USER_MODEL = "account.User"

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME":
        "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"
    },
    {
        "NAME":
        "django.contrib.auth.password_validation.MinimumLengthValidator"
    },
    {
        "NAME":
        "django.contrib.auth.password_validation.CommonPasswordValidator"
    },
    {
        "NAME":
        "django.contrib.auth.password_validation.NumericPasswordValidator"
    },
]

SESSION_COOKIE_SECURE = env.bool("ASTERIX_SESSION_COOKIE_SECURE", default=True)
SESSION_COOKIE_NAME = "s"
CSRF_COOKIE_NAME = "c"

# Internationalization
# https://docs.djangoproject.com/en/{{ docs_version }}/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/{{ docs_version }}/howto/static-files/

STATIC_URL = "/static/"
STATIC_ROOT = rel("staticfiles/")
STATICFILES_DIRS = (rel("static/"), )

MEDIA_URL = "/media/"
MEDIA_ROOT = rel("media/")

CORS_ORIGIN_WHITELIST = (
    "http://localhost:3000",
    "http://localhost:8000",
    "http://192.168.60.59:8000",
)
CORS_ORIGIN_ALLOW_ALL = True

WORKERS_SLEEP = 1
WORKERS_PURGE = 1000

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.TokenAuthentication",
        "rest_framework.authentication.SessionAuthentication",
    ),
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.AllowAny", ),
    "DEFAULT_PAGINATION_CLASS":
    "rest_framework.pagination.LimitOffsetPagination",
    "DEFAULT_FILTER_BACKENDS": (
        "django_filters.rest_framework.DjangoFilterBackend",
        "rest_framework.filters.OrderingFilter",
        "rest_framework.filters.SearchFilter",
    ),
    "DEFAULT_RENDERER_CLASSES": (
        "djangorestframework_camel_case.render.CamelCaseJSONRenderer",
        "rest_framework.renderers.BrowsableAPIRenderer",
    ),
    "DEFAULT_PARSER_CLASSES":
    ("djangorestframework_camel_case.parser.CamelCaseJSONParser", ),
    "EXCEPTION_HANDLER":
    "asterix.apps.libs.exception_handler.custom_exception_handler",
}

APP_NAME = "asterix"
ADMIN_TITLE = "Admin"
ADMIN_HEADER = "Admin"

# MAIL
SEND_MAIL = env.str("SEND_MAIL") == "True"
EMAIL_PROVIDER = os.environ.get("EMAIL_PROVIDER",
                                "smtp")  # 'smtp' or 'sendgrid'

WEB_URL = env.str("WEB_URL")
# RESET_PASSWORD_URL = "{}{}".format(WEB_URL,
#                                    "/reset-password/{reset_token}/{user_id}")
# DEFAULT_FROM_EMAIL = "asterix@no-reply.org"
# DEFAULT_FROM_NAME = "The Asterix Team"

# if EMAIL_PROVIDER == "smtp":
#     EMAIL_HOST = env.str("SMTP_SERVER")
#     EMAIL_HOST_USER = env.str("SMTP_LOGIN")
#     EMAIL_HOST_PASSWORD = env.str("SMTP_PASSWORD")
#     EMAIL_PORT = env.str("SMTP_PORT", 587)
#     EMAIL_USE_TLS = True

# SENDGRID_API_KEY = env.str("SENDGRID_API_KEY")
# SENDGRID_URL = "https://api.sendgrid.com/v3/mail/send"
