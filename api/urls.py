from django.urls import path
from .views import home, LessonView, GetLesson, ling_login, get_user
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('', home),
    path('lsn', LessonView.as_view()),
    path('get-lsn', GetLesson.as_view()),
    path('ling_login/', ling_login, name="ling_login"),
    path('get_user/', get_user, name="get_user")
]