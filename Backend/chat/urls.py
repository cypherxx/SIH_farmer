from django.urls import path
from . import views as v

app_name = 'chat'

urlpatterns = [
    path('', v.ChatListView.as_view(), name='all'),
    path('new/', v.ChatCreateView.as_view(), name='new'),
    path('view_chat/', v.get_chats, name='chats'),
    path('add_chat/', v.add_chats, name='add_chat'),
    
]
