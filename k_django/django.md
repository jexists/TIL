# 설치 (Cli)

# pip

→ The Python Package Installer

## 외부패키기 사용시

`python -m pip install 패키지_이름` → 권장 (버전)

[맥일경우] `python3 -m pip install 패키지_이름`

`python pip install 패키지_이름`

## django 설치

`python -m pip install Django`

# venv

→ 가상환경을 만들기 위한 모듈

→ virtual environment

→ 하나의 시스템 내에서 실행되는 다른 파이썬 앱의 동장에 영향을 주지 않게끔 분리된 독립적인 환경

→ `python3 -m venv 가상환경_이름`

→ `python3 -m venv env`

→ 가상환경 폴더 생김

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9dbef1d4-3360-4b30-810f-abc9d956bcc7/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9dbef1d4-3360-4b30-810f-abc9d956bcc7/Untitled.png)

## 가상환경 Activate

→ 터미널위치: env 폴더

→ [맥] `source bin/activate`

→ [윈도우] `source Scripts/activate`

→ (env) 활성화 중

→ `deactivate`: 비활성하고 싶을 경우

# Django 설치

→ `source bin/activate`

→ `python -m pip install Django`

## 업그레이드

`python -m pip install --upgrade pip` 

`django-admin startproject 프로젝트네임`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ad78237-0565-49e5-89f5-d6da648a4eae/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ad78237-0565-49e5-89f5-d6da648a4eae/Untitled.png)

localhost:8000

`python -m pip install pylint`

패키지 만들기

`python [manage.py](http://manage.py/) startapp 패키지 이름`

서버 실행

`python [manage.py](http://manage.py/) runserver`

## migration 파일 생성

`python [manage.py](http://manage.py) makemigrations posts`

`python [manage.py](http://manage.py) makemigrations 파일이름`

## SQL코드로 변환 분석

`python [manage.py](http://manage.py) sqlmigrate posts 0001`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d4cd620-c460-4828-b988-5e4aa8678231/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d4cd620-c460-4828-b988-5e4aa8678231/Untitled.png)

python [manage.py](http://manage.py) migrate

### 관리자 페이지 만들기

`python [manage.py](http://manage.py) createsuperuser`

username → email 주소 → 비밀번호 → 비밀번호 확인

jexists 0511

[http://127.0.0.1:8000/admin/login/?next=/admin/](http://127.0.0.1:8000/admin/login/?next=/admin/)

```python
#urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('posts/', include('posts.urls')),
]
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d8bd1116-ff6e-4568-92d9-a6fd7d4adf83/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d8bd1116-ff6e-4568-92d9-a6fd7d4adf83/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/06b8caed-0ba2-4205-a9bd-abedfd553f28/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/06b8caed-0ba2-4205-a9bd-abedfd553f28/Untitled.png)

## 장고 다양한 리소스 사용

python [manage.py](http://manage.py) shell

`$python [manage.py](http://manage.py) shell`

`exit()` → 종료

# repl

```jsx
**1. [프로젝트 이름]의 장고 프로젝트 생성**
django-admin startproject [프로젝트 이름]  

**2. 장고 프로젝트에 새로운 앱을 생성**
python manage.py startapp [앱이름]  

**3. 개발 서버 실행**
python manage.py runserver  

**4. models.py를 기반으로 migration 생성**
python manage.py makemigration  

**5. migration 목록 출력**
python manage.py showmigrations  

**6. 데이터베이스 생성**
python manage.py migrate  

**7. Django shell 실행**
python manage.py shell  

**8. 관리자 계정 생성**
python manage.py createsupersuer  
```

이미지

`python -m pip install Pillow`

python -m pip install requests

## postgresql [window]

python -m pip install psycopg2

## postgresql[mac]

brew install openssl

export LDFLAGS="-L/usr/local/opt/openssl/lib"

export CPPFLAGS="-L/usr/local/opt/openssl/include"

brew install postgresql

python -m pip install psycopg2