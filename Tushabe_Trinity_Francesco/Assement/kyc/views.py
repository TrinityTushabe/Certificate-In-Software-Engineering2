from django.shortcuts import render, redirect
from .forms import *
from django.contrib import messages



def registration_form(request):
    biodata_form = BioDataForm(request.POST)
    location_form = LocationForm(request.POST)
    contact_form = ContactForm(request.POST)

    if request.method == 'POST':
        if biodata_form.is_valid() and location_form.is_valid() and contact_form.is_valid():
            biodata = biodata_form.save()
            location = location_form.save()
            contact = contact_form.save()
            messages.success(request, 'Form successfully submitted.')
            # Redirect to a success page or reset the forms
            return redirect('registration_success')

    return render(
        request,
        'assets/registration_form.html',
        {'biodata_form': biodata_form, 'location_form': location_form, 'contact_form': contact_form}
    )

def registration_success(request):
    
    return render(request, 'assets/registration_success.html')
