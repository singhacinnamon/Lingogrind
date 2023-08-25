from django.urls import path
from .views import home, LessonView

urlpatterns = [
    path('', home),
    path('lsn', LessonView.as_view())
]