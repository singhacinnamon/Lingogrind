from django.urls import path
from .views import home, LessonView, GetLesson

urlpatterns = [
    path('', home),
    path('lsn', LessonView.as_view()),
    path('get-lsn', GetLesson.as_view())
]