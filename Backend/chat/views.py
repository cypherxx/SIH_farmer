from email import message
from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import CreateView, ListView
from .forms import ChatForm
from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Chat, language
from django.utils import timezone
import time
import json



class ChatCreateView(LoginRequiredMixin, CreateView):
    login_url = 'accounts:login'
    form_class = ChatForm
    model = Chat

    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.user = self.request.user
        self.object.save()
        return super().form_valid(form)

class ChatListView(LoginRequiredMixin, ListView):
    model = Chat
    def get_queryset(self):
        chats=Chat.objects.filter(posted_at__lte=timezone.now()).order_by('posted_at')
        # for i in chats:
        #         driver= webdriver.Chrome(chromedriver_path)
        #         lang_code=(language.objects.get(user=self.request.user)).code
        #         print(lang_code, self.request.user)
        #         driver.get("https://translate.google.co.in/?sl=auto&tl="+lang_code+"&text="+str(i.message)+"&op=translate")
        #         time.sleep(6)
        #         output1 = driver.find_element_by_class_name('J0lOec').text
        #         i.message=output1
        #         driver.close()
        return chats
            

def get_chats(request):
        chats=list(Chat.objects.filter(posted_at__lte=timezone.now()).order_by('posted_at').values())
        return JsonResponse(chats,safe=False)

def add_chats(request):
        chat=json.loads(request.data)
        obj=Chat(user=chat['user'],message=chat['message'],posted_at=chat['posted_at'])
        obj.save()
        chats=list(Chat.objects.filter(posted_at__lte=timezone.now()).order_by('posted_at').values())
        return JsonResponse(chats,safe=False)