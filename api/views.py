from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import LessonSerializer
from .models import Lesson


# Create your views here.
def home(request):
    return HttpResponse("Hello")

class LessonView(generics.CreateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
