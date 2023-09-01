from django.forms import ModelForm
from .models import *

class RegistrationForm(ModelForm):
    class Meta:
        model = Register
        fields = [
            'first_name','last_name','dob','country','town','zipcode','district','phone1','phone2','email',
        ] 