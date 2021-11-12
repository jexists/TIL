# SQL

-Structured Query Language (구조화 질의 언어 = 구조, 요청, 언어)
-데이터베이스(데이터를 저장하는 곳)와 대화하기 위한 언어
-관계형 데이터베이스에서 데이터 조작과 데이터 정의를 하기 위해 사용하는 언어
-사용자는 데이터베이스에 자료를 입력/조회/수정/삭제 하기 위하여 SQL 사용
-**Relational(SQL)**: mysql, postgresql, sqlite & **Non-Relational (NonSQL)**: mongoDB, DynamoDB, couchDB
-엑셀 비슷: 시트 = 테이블 / 행 row, 열 column

#### **데이터베이스 (Database:DB)**

-데이터에 직접적으로 접근을 허용(X), 특정 명령이 들어오면 명령에 대한 정보 전달, 수정, 삭제하는 역할
-특정 기업이나 조직 또는 개인이 필요에 의해 논리적으로 연관된 데이터를 모아 일정한 형태로 저장해 놓은곳

#### **데이터베이스 관리 프로그램 (Database Management System: DBMS)**

-DBMS를 이용하여 데이터 입력, 수정, 삭제 등의 기능 제공

#### **데이터베이스 특징**

-통합된 데이터, 저장된 데이터, 운영 데이터, 공용 데이터

#### SQL 작업 종류

-데이터 조회
-테이블에서 행 삽입, 갱신 및 삭제
-객체 생성, 변경 및 삭제
-데이터베이스 및 해당 객체에 대한 엑세스 제어
-데이터베이스 일관성 및 무결성 보장

#### ORM

>파이썬 - 장고 ORM
>라라벨 - eloquent ORM
>NodeJS - Sequelize / type ORM

---

### 언어

표 - table

행 - row, record (가로 - 테이터의 자체)

열 - column (수직 - 데이터의 타입/구조)

---

## SQL commands

#### DDL -Data Definition Language 

- 테이블 관련 생성, 수정, 삭제 등 - 테이블 데이터 모양 작업 (자체적으로 TCL -commit&rollback)

>**CREATE** - 테이블 등 데이터 구조(객체)를 생성
>
>**ALTER** - 객체를 수정할 때 사용
>
>**DROP** - 객체 제거 시 사용 (테이블/표 지우기)
>
>**TRUNCATE** - 객체내의 모든 행을 삭제
>
>**RENAME** - 객체 이름을 변경할 때 사용
>
>**COMMENT**

#### DML - Data Manipulation Language

-DDL을 통해 생성된 테이블에 데이터 생성, 수정, 조회, 변경, 삭제

>**SELECT** - 데이터베이스에서 데이터를 검색할 때 사용 (단순 조회)
>
>**INSERT** - 테이블에서 새 행을 입력 (신규 데이터 생성)
>
>**UPDATE** - 기존 행 변경 (기존데이터 변경)
>
>**DELETE** - 행을 제거 (기존데이터 제거 / 한줄지우기)
>
>**MERGE** - 데이터가 테이블에 존재하지 않으면 INSERT, 존재하면 UPDATE를 수행한다. (insert, update 동시)
>
>**CALL**
>
>**EXPLAIN PLAN**
>
>**LOCK TABLE**

#### TCL - Transactional Control Language

Transaction 컨트롤 (DML - insert,update,delete,merge에서 동작)

>**COMMIT** - DML문이 변경한 내용을 관리 (지금까지 작업한것 반영)
>
>**ROLLBACK** - 데이터에 대한 변경 내용은 논리적인 트랜잭션으로 그룹화 가능(지금까지 작업한것 취소)
>
>**SAVEPOINT**
>
>**SET TRANSACTION**

#### DCL - Data Control Language

-데이터 컨트롤 (관리자 사용자) -허락&제어

> **GRANT** - ORACLE 데이터베이스 및 해당 구조에 대한 액세스 권한을 부여 (허락)
>
> **REVOKE** - ORACLE 데이터베이스 및 해당 구조에 대한 액세스 권한을 제거 (제어)

---

###### [SQL 예제]

|  ID  | name  | email        | age  |
| :--: | ----- | ------------ | ---- |
|  1   | Jeong | 1@naver.com  | 23   |
|  2   | Lee   | 2@gmail.com  | 42   |
|  3   | Park  | 3@hanmil.com | 45   |
|  4   | Kim   | 4@gmail.com  | 23   |
|  5   | Lim   | 5@naver.com  | 12   |

student 테이블 유저의 모든 이메일 필요

```sql
SELECT email FROM students;
```

21살보다 많은 유저의 이메일 필요

```sql
SELECT email FROM students WHERE age > 21;
```

유저의 이메일이 naver인 경우의 나이 필요 (% = 특정값을 찾을때 사용)

```sql
SELECT age FROM students WHERE email LIKE "%naver.com";
```

ID가 2인 경우의 유저 삭제

```sql
DELETE FROM students WHERE id=2;
```

15~18세 사이의 학생 필요

```sql
SELECT email FROM students WHERE age BETWEEN 15 AND 18;
```



