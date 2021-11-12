# Git vs GitHub

git = 커피  : 변화감지 (what, where, when, who, etc)

gitHub= 카페 : 클리우드에 있는 깃 제공자 & 변화기록 남기는 곳

#### 깃 저장소

GitHub, GitLab, Bitbucket

#### Git 사용하는 이유

버전관리(백업), 협업, 

#### 깃 사용방법

sourceTree
CLI = (window: CMD / powershell & Mac: Terminal)

#### 다운

Git https://git-scm.com
visual studio code
SourceTree

#### 사용법

1. **처음시작하기**

2. 폴더 생성

3. cli 폴더 위치 찾아가기 (vs code 터미널 실행: ctlr+` / new terminal)

4. ```
   $git init
   ```

5. ```
   $git config --global user.name "이름"
   ```

6. ```
   $git config --global user.email "이메일주소"
   ```

7. 숨겨진 파일 보이기 => .git 파일 생성

8. **현재시점 저장하기**

9. 현재 상태 확인하기 - 빨강:add X | 초록:add O

   ```
   $git status
   ```

10. 파일담기

    ```
    $git add . 				//모든것 담기
    $git add 파일이름
    ```

11. 설명적기

    ```
    $git commit -m "설명"
    ```

12. git 상태 확인하기 (아무것도 없음)

    ```
    $git status
    ```

13. 과거 내역(commit한 내용) 확인 =>터미널 vi 에디터 실행 

    ```
    $git log
    ```

14. vi 에디터 종료

    ```
    :q
    ```

15. **과거로 변경하기** - 1. 복원X

16. git log 해서 나온 변경할(**돌아갈 시점**) 내용 앞에 6자리 복사

17. ```
    $git reset 6자리 --hard
    ```

18. **과거로 변경하기** - 2. 복원

19. git log해서 나온 변경할(**취소할 시점**) 내용 앞에 6자리 복사

20. ```
    $git revert 6자리 --hard
    ```

21. 새 커밋 메시지 작성 화면

22. 그대로 저장하겠다는 vi 명령어

    ```
    :wqd
    ```

23. **여러 버전 만들기**

24. 두가지로 분류하겠다.

    ```
    $git branch 이름
    ```

25. ```
    $git branch
    ```

26. ```
    결과: master 새로 입력한 이름
    ```

27. ```
    $git checkout 원하는 브랜치
    ```

28. 원래대로 돌아가기

    ```
    $git checkout master
    ```

29. **버전합치기1** - merge (병합: 여러 브랜치 줄보이기)

30. 마스터 브랜치로 돌아오기

    ```
    $git checkout master
    ```

31. 합칠 브랜치 이름 적어서 합치기

    ```
    $git merge 합칠 브랜치 이름
    ```

32. 윈도우 ok | 맥 vi (커밋메세지 작성)- 맨위에 적힌거 그대로 적기

    ```
    :wq
    ```

33. 작업내역 확인

    ```
    $git log --graph --all --decorate
    ```

34. **같은 파일에 같은 부분 수정되었을 경우** - conflict (충돌)

35. 파일수정 후 git add -> git commit -m

36. merge 완료

    ```
    :wq
    ```

37. **버전합치기2** - rebase (재배치: 한줄로 깔끔하게 보이기)

38. **브랜치 삭제**

39. ```
    $ git branch -d 브랜치이름
    ```



#### git 협업하기 

1. git 로그인

2. repository 새로 만들기

3. 이름, 설명, 보안 (나중에 수정가능)
   public: 오픈소스, 외부 접근o | private: 특정사용자&나 

4.  ```
   $git status
    ```

5. ```
   $git remote origin ~~~
   ```

6.  git user name & password

7. ```
   $git remote
   ```

8. ```
   $git push
   ```

9. **올리지 않을 파일** (.gitignore)

10. **소스 내려받기**

11. 초대하기 setting => collaborator => username 초대

12. ```
    $git clone ~~~
    ```

13. ```
    $git pull
    ```

14. git commit 메세지 작성법

15. 다운받아야 할내용 확인

    ```
    $git fetch
    ```

16. ```
    $git pull (원격명) (브랜치명)
    ```

17. **브랜치 주고받기**

18. ```
    $git checkout -b (브랜치명)
    ```

19. ```
    $git fetch
    ```

    ```
    $git banch -a
    ```

20. ```
    $git checkout -b 브랜치이름 origin/브랜치이름
    ```

    브랜치이름을 만들어서 orgini/브랜치이름을 받아온다

21. 

#### git 명령어

깃 시작 -> .git 생성

```
$git init
```

백업 설정

```
$git add .
```

백업 설정 노트 - 변경사항기록

```
$git commit -m "작업수행내용"
```

백업 내용 확인 (과거 내역 확인)

```
git logs
```

과거상태 복원 (수정된 내역 복원 & 새로만든 내용 삭제 & 지웠던 파일 복원)

```
$git reset --hard "과거내역"
```

파일 분리 (다른 걸로 시도해보고싶을때) - 메인브랜치 & 서브브랜치

```
$git branch "브랜치명"
```

파일 합치기

```
$git merge "브랜치명"
```

