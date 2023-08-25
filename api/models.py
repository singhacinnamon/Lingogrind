from django.db import models

# Create your models here.
class Lesson(models.Model):
    lang = models.CharField(max_length=2)
    prio = models.IntegerField(default=100)
    name = models.CharField(max_length=100, unique=True)