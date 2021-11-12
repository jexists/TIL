from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Post(models.Model):
  # 변수 = 변수타입 (Model Field Reference)
  # author = models.CharField(max_length=100)
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
  # user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
  #user필수가 아니다 
  # user 삭제시 포스트도 삭제같이 on_delete=models.CASCADE

  #최대 100글자 
  body = models.TextField()
  #대용량 텍스트
  image = models.ImageField(upload_to='posts', null=True)
  # python -m pip install Pillow 설치
  # 어떤path로 저장하는지, 없어도 사용가능

  # create_at = models.DateTimeField()
  # created_at = models.DateTimeField(auto_now_add=True)
  created_at = models.DateTimeField(auto_now_add=True, null=False)
  #날짜와 시간 저장
  # create_at = models.DateField()
  #날짜만 저장
  liked_users = models.ManyToManyField(User, related_name='liked_posts')

  # post.liked_users //해당 게시물에 좋아요 누른사람
  # user.liked_posts //유저가 좋아요 누 게시물

  def __str__(self):
    if self.user:
      return f'{self.user.get_username()}: {self.body}, {self.created_at}'
    else:
      return f'{self.body}'

    # return f'{self.author}: {self.body}, {self.created_at}'
  #확인하기

  # user = User.objects.get(username="jexists")