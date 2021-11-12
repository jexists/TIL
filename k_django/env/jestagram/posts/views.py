from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Post
from django.utils import timezone
from django.contrib.auth.decorators import login_required
import requests
# Create your views here.
# class Member:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

def index(request): #첫번째 파라미터: request
  # https://dog.ceo/dog-api/
  dog_api_response = requests.get('https://dog.ceo/api/breeds/image/random')
  dog_api_response_dictionary = dog_api_response.json()
  dog = None
  if dog_api_response_dictionary.get('status') == 'success':
    dog = dog_api_response_dictionary.get('message')


  # context = {
  #   'post': {
  #     'author': 'jexists',
  #     'summary': 'django project'},
  #     #dictionary
  #     'numbers': [10,20, 30],
  #     #list
  #     'member': Member('jexists', 20)
  #     #class instance
  # }
  # context = {
  #   'posts': [
  #     {'author': 'joy', 'summary': 'book1'},
  #     {'author': 'sadness', 'summary': 'book2'},
  #     {'author': 'anger', 'summary': 'book3'}
  #   ]
  # }
  # posts = Post.objects.all().order_by('created_at')[0:1]
  # print(posts.query)
  # 오름차순 정렬
  # posts = Post.objects.all().order_by('-created_at')
  # 내림차순 정렬

  posts = Post.objects.all()
  # 포스트에 저장되있는 모든 데이터를 불러온다
  context = { 'posts': posts, 'dog': dog }
  return render(request, 'posts/index.html', context)
  # return render(request, 'posts/index.html', {context 작성 가능})
  # print('로그 남기기: 디버깅')
  # return HttpResponse('Hello World!')
  # http://localhost:8000/posts/ -> 실행


def detail(request, post_id):
  post = Post.objects.get(id=post_id)
  context = { 'post': post }
  return render(request, 'posts/detail.html', context)
  # return HttpResponse(f'post: {post_id}!')

@login_required
def new(request):
  # if not request.user.is_authenticated:
  #   return redirect('accounts:login')
  return render(request, 'posts/new.html')


@login_required
def create(request):
  #GET 방식일 경우
  # print(request.GET)
  # request.GET['author']
  # request.GET['body']
  #아래코드가 더 안전
  # print(request.GET.get('author'))
  # print(request.GET.get('body'))
  # request.GET.get('author')
  # request.GET.get('body')
  # print(reqest.GET)
  # context = {'author': request.GET.get('author'), 'body': request.GET.get('body')}
  # return render(request, 'posts/create.html', context)

  # if not request.user.is_authenticated:
  #   return redirect('accounts:login')

  # author = request.POST.get('author')
  user = request.user
  body = request.POST.get('body')
  image = request.FILES.get('image')
  #이미지가 없을 경우 None

  # post = Post(author=author, body=body, created_at=timezone.now())
  post = Post(user=user, body=body, image=image, created_at=timezone.now())
  post.save()

  return redirect('posts:detail', post_id=post.id)
  # 새로운 상세페이지로 이동

@login_required
def edit(request, post_id):
  try:
    post = Post.objects.get(id=post_id, user=request.user)
  except Post.DoesNotExist:
    return redirect('posts:index')
  context = { 'post': post }
  return render(request, 'posts/edit.html', context)

@login_required
def update(request, post_id):
  post = Post.objects.get(id=post_id)
  # post.author = request.POST.get('author')
  post.body = request.POST.get('body')
  image = request.FILES.get('image')
  if image:
    post.image = image

  post.save()
  return redirect('posts:detail', post_id=post.id)

@login_required
def delete(request, post_id):
  try:
    post = Post.objects.get(id=post_id, user=request.user)
  except Post.DoesNotExist:
    return redirect('posts:index')

  post.delete()
  return redirect('posts:index')


# def comment(request, post_id):
#   return HttpResponse('Hello comment!')

@login_required
def like(request, post_id):
  if request.method == 'POST':
    try:
        post = Post.objects.get(id=post_id)

        if request.user in post.liked_users.all():
            post.liked_users.remove(request.user)
        else:
            post.liked_users.add(request.user)
            # add/remove -> save()포함
        
        return redirect('posts:detail', post_id=post.id)
    
    except Post.DoesNotExist:
        # return redirect('posts:index')
        # 작성할 코드가 없을 경우는 pass
        pass

    return redirect('posts:index')

