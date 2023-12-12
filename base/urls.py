from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.get_posts),
    path('post/<str:id>', views.get_single_post, name='post'),
    path('register/', views.register_user, name='register'),
    path('login/', views.login_user, name='login'),
    path('create/', views.create_post, name='create'),
    path('update/<str:id>', views.update_post, name='update'),
    path('delete/<int:id>', views.delete_post, name='delete'),
]