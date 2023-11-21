from django.urls import path
from .views import home, LessonView, GetLesson, GetCSRFToken, ling_login, get_user, ling_logout
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('', home),
    path('lsn', LessonView.as_view()),
    path('get-lsn', GetLesson.as_view()),
    path('ling_login/', ling_login, name="ling_login"),
    path('get_user/', get_user, name="get_user"),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('ling_logout', ling_logout, name="ling_logout")
]