from django.urls import path
from . import views
urlpatterns = [
    path('crop_recommend/',views.crop_recommendations,name="crop_data"),
    
]