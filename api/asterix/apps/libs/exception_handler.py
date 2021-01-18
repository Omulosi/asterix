from rest_framework.views import exception_handler


def custom_exception_handler(exc, context):
    """
    Call REST framework's default exception handler first, to get the
    standard exception.

    Must be set in settings:
    >>> REST_FRAMEWORK = {
    ...     # ...
    ...     'EXCEPTION_HANDLER': 'libs.exception_handler.custom_exception_handler',
    ...     # ...
    ... }
    For the parameters, see ``exception_handler``
    """
    response = exception_handler(exc, context)

    if response is not None:
        response.data['status_code'] = response.status_code
        print("===========> " + str(dict(response.data)))

    return response
