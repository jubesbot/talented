from django.contrib.auth import REDIRECT_FIELD_NAME
from django.contrib.auth.decorators import user_passes_test
from django.core.exceptions import PermissionDenied

def login_required_api(function):
    """
    to prevent non-users from logging in
    """
    def wrapper(request, *args, **kwargs):
        if request.user:
            return function(request,*args, **kwargs)
        else:
            raise PermissionDenied
    
    wrapper.__doc__ = function.__doc__
    wrapper.__name__ = function.__name__

    return wrapper