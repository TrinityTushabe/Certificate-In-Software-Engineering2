from django.db import models

# Create your models here.
class Register(models.Model):
    first_name = models.CharField(max_length=255, blank=False, null=False)
    last_name = models.CharField(max_length=255, blank=False, null=False)
    dob = models.DateField()
    country = models.CharField(max_length=255, blank=False, null=False)
    district = models.CharField(max_length=255, blank=False, null=False)
    town = models.CharField(max_length=255, blank=False, null=False)
    zipcode = models.IntegerField(default=0, blank=False, null=False)
    phone1 = models.CharField(max_length=15,blank =False, null = False)
    phone2 = models.CharField(max_length=15,blank =False, null = False)
    email = models.EmailField(blank = False, null = False)

    def __str__(self):
        return self.name
    



