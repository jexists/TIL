# DOM

## 파싱 (parsing)

→ 구문 분석

→ 프로그래밍 언어의 문법에 맞게 작성된 텍스트 문서를 읽어 들여 실행하기 위해 텍스트문서의 문자열을 토큰으로 분해하고 토큰에 문법적 의미와 구조를 반영하여 트리구조의 자료구조인 파스 트리를 생성하는 일련의 과정

## 렌더링(rendering)

→ HTML, css, 자바스크립트로 작성된 문서를 파싱하여 브라우저에 시각적 출력

## 렌더링 과정

1. 필요한 리소스 요청 ( HTML, css, js, 이미지, 폰트 등) → 서버응답
2. 렌더링 엔진은 서버로부터 응답된 HTML & CSS 파싱→DOM & CSSOM 생성하고 결합 →렌더트리 생성
3. 자바스크립트 엔진은 서버로부터 응답된 자바스크립트를 파싱하여 AST 생성 → 바이트코드 변환 후 실행 ( DOM API 통해 DOM/CSSOM변경 → 렌더트리 결합)
4. 렌더 트리를 기반으로 HTML 요소의 레이아웃 (위치 /크기) 계산 → 브라우저 화면 HTML 요소 페인팅

# URI

## URL

### protocol (scheme)

→ https

### host (domain)

→ www.domain.com

### port

→ :4000

### path

→ url/path

## URN

### host, port, path

### query

→ search?value=name

### 9fragment

→ #intro