import json
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from .serializers import LessonSerializer, CreateLessonSerializer
from .models import Lesson


# Create your views here.
def home(request):
    return HttpResponse("Hello")

def ling_login(request):
    if request.method == 'POST':
        username = json.loads(request.body)['username']
        password = json.loads(request.body)['password']

        print(f"Received username: {username}, password: {password}")
        print('Raw Data: "%s"' % request.body)

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'message': 'Login failed'}, status=401)
        
def get_user(request):
    return JsonResponse({'username': request.user.username})

class LessonView(generics.CreateAPIView):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class GetLesson(APIView):
    serializer_class = LessonSerializer
    lookup_url_kwarg = 'lang'

    def get(self, request, format=None):
        lang=request.GET.get(self.lookup_url_kwarg)
        Lsns = Lesson.objects.filter(lang=lang).order_by("prio").values()
        data = LessonSerializer(Lsns, many=True).data
        return Response(data, status=status.HTTP_200_OK)

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