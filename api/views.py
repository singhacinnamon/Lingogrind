from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import LessonSerializer, CreateLessonSerializer
from .models import Lesson


# Create your views here.
def home(request):
    return HttpResponse("Hello")

class LessonView(generics.CreateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class CreateLessonView(APIView):
    serializer_class = CreateLessonSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            lang = serializer.data.get('lang')
            prio = serializer.data.get('prio')
            name = serializer.data.get('name')
            file = serializer.data.get('file')
            lesson = Lesson(lang=lang, prio=prio, name=name, file=file)
            lesson.save()
            return Response(LessonSerializer(lesson).data, status=status.HTTP_201_CREATED)