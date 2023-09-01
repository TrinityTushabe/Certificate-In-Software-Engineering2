from django.shortcuts import render, redirect
from django.contrib import admin


from .models import *
from .forms import *


# Create your views here.
def register(request):
    register_form = RegistrationForm(request.POST)
    if request.method == 'POST':
        if register_form.is_valid():
            return redirect('')
    return render(request, 'temp/regester.html', {'register_form': register_form, })

