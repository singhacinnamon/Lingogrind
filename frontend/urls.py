from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('th/', index),
    path('es/', index),
    path('EsGreetingsGratitudesEtc/', index)
    ]