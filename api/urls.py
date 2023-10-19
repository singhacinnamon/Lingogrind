from django.urls import path
from .views import home, LessonView, GetLesson
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('', home),
    path('lsn', LessonView.as_view()),
    path('get-lsn', GetLesson.as_view()),
    path('login/', auth_views.LoginView.as_view(), name='login'),

]