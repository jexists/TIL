
# 앵귤러 페이지 배포

# Angular

### 1. 라이브러리 설치

$ npm install -g angular-cli-ghpages

### 2. 프로젝트 빌드

$ ng build --prod --base-href "https://<user-name>.github.io/<repo>/<file name>/"

예제) ng build --prod --base-href "[https://jexists.github.io/](https://jexists.github.io/study/04_buckitListApp)copy04_trello/client/"

### 3. 프로젝트 url 저장

$ ngh --dir dist/[projectName]

### 테스트 예제)

1. 앵귤러 파일 이동
2. cli 사용
    
    ng build --prod --base-href "https://jexists.github.io/study/04_heroApp/"
    
    ngh --dir dist/heroes-app
    
3. dist 파일 복사후 폴더생성 한 곳에 복사