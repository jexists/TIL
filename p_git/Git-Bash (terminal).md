# Git-Bash (terminal)

# Git - 소스관리프로그램

[Git Bash 설치: https://www.git-scm.com/](https://www.git-scm.com/)

터미널(terminal) / 콘솔(console) / 도스창 / 쉘(shell)

프로토콜: 접속하는 방법

Window : 컬러테마 / MAC : 흑백 테마 (zshell: 컬러테마)

Git Bash 실행:  git bash here $



**&&** = enter 기능
**ctrl+c** = 끝내다
**ctrl+insert** = 복사
**shift+insert** = 붙여넣기 

**whoami** = 컴퓨터이름/영어로 나와야함 (한국어나오면 포맷)

**pwd** = print working directory / 현재 디렉토리 출력 / 현재 위치 파악

**clear** = 화면 정리

**history** = 사용기록보기 / 지금까지 입력한 히스토리 
	**!숫자** = 해당하는 숫자의 명령 재동작
	전 명령어 쓰고 싶을때 키보드 방향키 (위/아래)

**start .** = bash에서 탐색기 열기 / 현재 디렉토리 실행 (현재 폴더 열기) / (Mac : open.)



**ls** = list 디렉토리 목록 조회 / 현재 작성하고 있는 목록(폴더/파일)
**ls -a**  = 숨겨진 파일까지 포함한 목록
**ll** = 속성보완 / 권한 설정  포함한 목록 (권한설정: drwxr-xr-x)



> . current directory
> .. parent directory
> ~ home directory
> / directroy 폴더 경로 / path 쓸때 / 를 사용해 디렉토리 구분
> `*` all 



**cd** = change directory 디렉토리 변경 / 위치이동 / 경로 이동

> **cd ..**  "상위폴더로 이동 (cd ../ - /생략)"
> **cd ./폴더명** "현재위치에서 폴더명으로 이동 (./생략가능)"
> 	**cd name** "name 폴더로 이동"
> **cd /**  "최상위 폴더 이동"
> **cd -** "되돌아가기 = ctrl+z / 최근에 사용한 디렉토리 이동" 
> **cd ~** "사용자/user 폴더로 이동 / 운영체제의 사용자 디렉토리"



**mkdir** = make directory 새폴더 생성 / 다중폴더&한글폴더 생성 / 폴더안에폴더 생성가능 /  띄어쓰기X->한개의파일안나옴 ('' "를 사용하여 감싸면 가능) / 하위 디렉토리를 생성할 경우 옵션 -p(앞/뒤 가능) 

```gitbash
&& enter 기능

1.	mkdir one    
	mkdir one/one one/two

2.	mkdir one
	cd one
	mkdir one two

3.	mkdir one && cd one && mkdir one two

4.	mkdir one/one two three -p
```



**mv** = move 파일/디렉토리 이동 / 이름변경할때도 사용
	**mv 파일이름.확장자명 경로/** = 경로로 파일 이동
	**mv 파일이름.확장자명 바꿀파일이름.확장자명** = 이름변경

**cp** = 파일 및 디렉토리 복사 (복사 및 붙여넣기 사용시 이름 변경 가능)
	**cp 파일이름.확장자명 복사할이름.확장자명**



**rm** = 파일 또는 디렉토리를 지울때
	**rm *** = 다 지우기 (복구불가 / shift+delet)
**rm -rf** = 강제성 지우기



**touch** = 빈파일 생성 / 필요한 문서 생성(md, html, css, js, ai 등 생산가능 / 호환?)
	**touch 파일이름.확장자명**

**cat 파일이름** = 파일 내용 보기 / 문서 내용 파악 /문서에서 작성한 내용보기

**echo** = 문서 내부에 추가내용 삽입
	**echo "추가내용입력" >> 파일명.확장자명** = 기존내용에서 추가 내용 삽입
	**echo "추가내용입력" > 파일명.확장자명** = 기존내용 삭제 후 내용 입력

 

---

**--version** = 설치된 프로그램 버젼
	node --version = nodejs 버젼
	npm --version =npm 버젼

**npm list**
-empty = 플러그인 설치해야한다.

[browser-sync: https://www.browsersync.io/](https://www.browsersync.io/)

**npm install --global browser-sync**

> npm 프로그램 
> install 설치 
> --global C드라이브
> browser-sync 어플
> =npm 프로그램의 browser-sync 어플을 C드라이브에 설치할것이다. 
> (MAC: sudo npm install --global browser-sync)

**browser-sync start --server --files** `"**/*.*"`

```gitbash
browser-sync start --server --files "**/*.*"

browser-sync start --server --files "**/*.jpg" = jpg파일만 불러오겠다.
```

>start --server 서버 실행
>`**/*.*`폴더 안에있는 모든 파일
>폴더 `**` 파일 `*`
>`*.*` 전체파일 (전체파일이름.전체확장자)

**ctrl + c** = 서버 종료

---

**vi** 글 수정 편집기(에티터) 나옴

vi  파일이름

i  글씨 쓰기 가능 

esc 종료  

> ! 저장안함 
> q 나가기
> w 저장

:wq

:!q 저장안하고 나가기

HJKL 왼 아래 위 오른 방향키

---

start (window)

open (mac)



mkdir -p css/base js/src (폴더안에 폴더만들기)



#### 기본 폴더 만들기

$ mkdir css/base css/src img ie font js/base js/src html media -p

$ touch index.html html/content.html

$ cp ../e_example/js/b



.index.html (처음인식하는 파일: 밖에 있어야한다. 처음에 있는 파일)

> ./ 현재
> ../상위위치
> / 최상 



ls 한후 cd 글씨쓰고 tab 누르면 글씨 나옴



mkdir dist public www