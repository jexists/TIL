# Git 서버 저장

**Git : 버전관리 툴 (클라우드 서비스)**

-깃허브의 심장에서 작동되는 소프트웨어인 깃(Git: 재수없고 멍청한 놈, 자식)을 만든 유명한 소프트웨어 개발자 리누스 토발즈
-깃은 프로젝트의 어떤 부분도 겹쳐쓰지 않게 프로젝트의 변경을 관리하는 버전관리 소프트웨어이다.

**repository** : 자료를 만들 공간 생성

**git clone**: 서버에 있는 자료를 내컴퓨터에 동일한 공간을 생성! (복제/다운받아서 생성)

원하는 위치 > git bash 실행 > $ git clone [git 주소 입력]

**&git clone 주소입력 (shift+insert)**

MAC사용시 별도의 공간이 없다면; document(문서)에 사용

1 내컴퓨터에 동일한 폴더 생성확인
2 내부의 숨긴폴더 “git”폴더 생성되었는지 확인! (git지우면 안됨)

**최초의 인지파일 README.md** 
생성된 파일로 이동 후 README.md 파일 데이타 생성

**$ echo "# git_test_190813" >> README.md**

readme 대문자

**위치 (master) -** git에 접속되어있다.

자료를 서브에 보내야하는데 (밀봉작업)

status(상태)자료 확인: 
**$git status: 자료확인**
붉은색글자: 파일, 폴더 - 아직 보낼 준비가 되어있지 않은 자료
녹색글자: (파일, 폴더) - 보낼 준비가 되어있는 자료

add: 자료담기
**$ git add [파일/폴더]**

> 지워도 git add
> 수정해도 git add

commit 그린색만 보내짐!

$git commit -m "code공부"

remove:완전한 삭제
$ git rm [파일/폴더]

reset: 자료 초기화/자료다시담기준비
$ git reset
**$ git reset 파일명/data : 선택자료취소/빼기**

컴퓨터 바뀔때 한번 (최초의 설정만 하면된다)
git 최초의 설정 (global = 전체/기본)
config 사용자 정보 입력 
**(기본설정)** 
**이름: $ git config --global user.name  “사용자이름”**
**이메일: $ git config --global user.email 사용자이메일**

컴퓨터의 위치가 변경되면 새로 입력을 해야함 
- 편집기를 사용해서 수정가능하지만 새로 쓰면 자동 수정가능 

설정/정보 확인
$ git config --list


git init
수신인 정보:

git hub 사이트(서버)에서 git clone 으로 받아서 내용 작성하고 있으므로, 
이미 수신인 정보는 가지고 있는 상태.

처음부터 웹에서 만들어서 받는것이..,, 권장 
만든후 웹으로 넣기 복잡함....
git remote add origin https://github.com/jexists/git_test_190813.git
~~$ git remote add origin 주소~~


권장: github.io에서 repasitory 생성후 clone 처리하는 것을 권장

commit 
첨부된 자료의 내용 (설정)

**$ git commit -m “첨부되는 자료 설명”**
주의사항: 전부 담은후 한번에 메세지를 담지말고
필요한 기능마다 순서에 맞게 설명을 담을것. 
*영문으로 쓸것

git commit -m “첫자료담기”
-> git status 파일이 사라짐



사용자 계정:
user name/user email
user password

**$ git push -u origin master** 
(최초) 최초의 한하여, 입력할때에는 -u origin mater사용
-컴퓨터 처음

**$ git push** : commit 된 자료를 보내기


git 허브 사이트 확인

100메가 이상X 100개 이상 못올림

 다른 컴퓨터에 최초는 clone (동일)



**주의사항:**

1. 자료를 올릴 컴퓨터의 data는 정확하게 처리
	- 중복되거나, 자료가 겹쳐서 생기는 문제를
만들지 않는것이 중요하다.

2. 자료를 정확하게 첨부하시오오옹

3. 한번에 100mb 이상, 한번에 100개 파일 이상, 한달에 1gb첨부 불가

4. git 폴더 내부에 다른 git 폴더를 연동하는 것은 X



**git push 업로드**

**git pull 다운**





다른 컴퓨터에 이후는 똑같댜 

새로 시작하는 컴퓨터 최초의 컴퓨터
(git 연결되있는)에서 
$ git pull 해라

pull: 현재 존재하는 git 자료에서 서버와의 
s내용을 update해라라라라

git pull 부터 하고 보자.

현재 존재하는 깃 자료에서 서버에서 내용을 update하는것 : push



##### 세팅 < git Hub page < source 마스터(master branch)클릭 < 파랑->초록변경 < 깃허브 웹으로 보이기

깃허브 웹사이트 + 폴더이름



