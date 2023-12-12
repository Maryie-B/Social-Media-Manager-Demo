from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    user = models.ForeignKey(User, related_name="posts", on_delete=models.CASCADE) 
    title = models.CharField(max_length=255)
    description = models.TextField()
    hashtags = models.TextField()


class Image(models.Model):
    post = models.ForeignKey(Post, related_name="images", on_delete=models.CASCADE)
    filename = models.ImageField(upload_to="images/")