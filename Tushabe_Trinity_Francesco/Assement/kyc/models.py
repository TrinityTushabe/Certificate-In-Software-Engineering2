from django.db import models

# Create your models here.

class BioData(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')])
    
    
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
class Location(models.Model):
    country = models.CharField(max_length=255)
    state_or_district = models.CharField(max_length=255)
    town = models.CharField(max_length=255)
    zipCode = models.CharField(max_length=10)
    
    def __str__(self):
        return self.country
    

class Contact(models.Model):
    phone_number1 = models.CharField(max_length=100)
    phone_number2 = models.CharField(max_length=100)
    
    def __str__(self):
        return self.phone_number1
    
    
    
    
    
    

    
