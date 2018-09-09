from django.db import models

# Name of the course
class seshPost(models.Model):
    subjectName = models.charField(max_length=64)
    description = models.charField(max_length=256)
    university = models.charField(max_length=256)
    username = models.charField(max_length=16)
    building = models.charField(max_length=64)
    time = models.charField(max_length=64)
    date = models.charField(max_length=256)
