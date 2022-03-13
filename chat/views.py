from django.shortcuts import render
from django.views.generic import CreateView, ListView
from .forms import ChatForm
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Chat, language
from django.utils import timezone
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.action_chains import ActionChains
#chromedriver_path="C://old_data/chromedriver/chromedriver.exe"
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
            

