from django.urls import path
from reg_form import views

urlpatterns =[
    path('',views.register,name='register'),
]