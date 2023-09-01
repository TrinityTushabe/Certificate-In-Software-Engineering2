from django.forms import ModelForm
from .models import *


class BioDataForm(ModelForm):
    class Meta:
        model = BioData
        fields = '__all__'
       
        
class LocationForm(ModelForm):
    class Meta:
        model = Location
        fields = '__all__'
        
        
class ContactForm(ModelForm):
    class Meta:
        model = Contact
        fields = '__all__'
        
