
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth

# Create your views here.

def sign_up(request):
    context = {}

# 포스트 방식일경우에 함수 실행 겟 방식일경우 화면출력
    if request.method == 'POST':
        #괄호를 감쌀경우 여러줄 컨디션 나열 가능
        if (request.POST.get('username') and
            request.POST.get('password') and
            request.POST.get('password') == request.POST.get('password_check')):

            #유저 만들때는 save() 불필요
            new_user = User.objects.create_user(
                username = request.POST.get('username'),
                password = request.POST.get('password'),
            )

            #로그인 처리후 게시글 목록페이지로
            auth.login(request, new_user)
            return redirect('posts:index')

        else:
            context['error'] = '아이디와 비밀번호를 다시 확인해주세요.'
    
    return render(request, 'accounts/sign_up.html', context)


def login(request):
    context = {}

    if request.method == 'POST':
        if request.POST.get('username') and request.POST.get('password'):

            #암호화 되어서 authenticate 함수사용
            user = auth.authenticate(
                request,
                username = request.POST.get('username'),
                password = request.POST.get('password'),
            )

            if user is not None:
                auth.login(request, user)
                return redirect('posts:index')
            else:
                context['error'] = "아이디와 비밀번호를 다시 확인해주세요."

        else:
            context['error'] = '아이디와 비밀번호를 다시 확인해주세요.'
    
    return render(request, 'accounts/login.html', context)

def logout(request):
    if request.method == 'POST':
        auth.logout(request)
        #섹션,쿠기 삭제 로그아웃

    return redirect('posts:index')