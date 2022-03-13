from django.http import JsonResponse
from django.shortcuts import render
from django.urls import reverse_lazy
from .forms import UserCreateForm
from django.views.generic import CreateView
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your views here.

def all_users(request):
	users=list((User.objects.all()).values())
	return JsonResponse(users,safe=False)
class Signup(CreateView):
	form_class = UserCreateForm
	success_url = reverse_lazy('accounts:login')
	template_name = 'accounts/signup.html'
