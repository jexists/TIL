- 목차
    
    

## 데이터베이스 목록

`show dbs`

## 데이터베이스 선택

`use DBName`

→ 존재하지 않은 데이터베이스도 선택 가능 (관련 물리적인 파일은 데이터베이스내 컬력션 생성될때 할당)

## 선택된 데이터베이스내의 Collection(table) 목록

`show collections`

# 데이터 검색/조회

→ 조회조건 null 사용시 존재하지 않은 필드도  조회 (해결: $exists 제한자 사용)

## 데이터 검색 (Robo 3T)

`db.getCollection('collectionNAme').find({"key":"value"})`

## 최신순으로 검색 - `sort`

`db.getCollection('collectionNAme').find({}).sort({"_id":-1});`

## 전체 데이터 검색- `find`

`db.collectionName.find();`

## 데이터 검색 방법

`db.collectionName.find({"key":"value"})`

## 다중 데이터 검색 방법

`db.collectionName.find({"key1":"value1", "key2":"value2"})`

## 검색한 데이터 수 - `count`

`db.collectionName.find({"key":"value"}).count()`

## 가장 첫번째 값 검색 - `findOne`

`db.collectionName.findOne()`

## Arrays 형태의 데이터 검색

`db.collectionName.find({"arraykey":{"$elemMatch":{"key":"value"}}})`

## Object 형태의 데이터 검색

`db.collectionName.find({"objectKey.key": "value})`

### 비교연산자 이용

- !=	$ne	  같지 않은 (not equal)
- <	$lt	  미만 (less than)
- <=	$lte    이하 (less than equal)
- >	$gt	  초과 (greater than)
- >=	$gte	  이상 ( greater than equal)

$exists

$in

$nin

예제)

```go
> db.test.find();

> db.test.find({ score: 30 });
 { "_id" : ObjectId("5c37341ae9c893200f99658d"), "sid" : "s3", "score" : 30 }

//Array 형태 검색
> db.getCollection('profile').find({"board_auth": {$elemMatch:{brd_id:110}}})

//Object 형태 검색
> db.getCollection('profile').find({"profile_phone_number.phone_number": "+821074511234"})

//비교연산자 수행 (문자열이용)
> db.test.find({ score: { '$gte': 80 } });
 { "_id" : ObjectId("5c37341ae9c893200f996592"), "sid" : "s8", "score" : 80 }
 { "_id" : ObjectId("5c37341ae9c893200f996593"), "sid" : "s9", "score" : 90 }

//AND 연산 수행
> db.test.find({ score: { '$gt': 30, '$lt': 60 } });
 { "_id" : ObjectId("5c37341ae9c893200f99658e"), "sid" : "s4", "score" : 40 }
 { "_id" : ObjectId("5c37341ae9c893200f99658f"), "sid" : "s5", "score" : 50 }

//OR 연산 수행
> db.test.find({ '$or': [ { score: { '$lt': 10 } }, { score: { '$gt': 80 } } ] });
   { "_id" : ObjectId("5c373419e9c893200f99658a"), "sid" : "s0", "score" : 0 }
   { "_id" : ObjectId("5c37341ae9c893200f996593"), "sid" : "s9", "score" : 90 }

//정규표현식 사용
//도시 이름이 ABE로 시작하는 것들
> db.zipcodes.find({ city : /^ABE/})
//도시 이름이 ABE로 시작하고 뒤에 5글자의 alphanumeric이 이어지는 경우만 조회
> db.zipcodes.find({ city : /^ABE(\w{5})$/})
//도시 이름이 A또는 B로 시작하고 마지막이 C로 끝나는 것들
> db.zipcodes.find({ city : /^(A|B)\w+C$/})
```

```go
// 조회조건 null 사용시 존재하지 않은 필드도  조회
> db.scores.insert({_id:1, kor : 80 })
WriteResult({ "nInserted" : 1 })
> db.scores.insert({_id:2, kor : 90 })
WriteResult({ "nInserted" : 1 })
> db.scores.insert({_id:3, kor : null })
WriteResult({ "nInserted" : 1 })
> db.scores.insert({_id:4, eng : null })
WriteResult({ "nInserted" : 1 })
> db.scores.find({ kor : null })
{ "_id" : 3, "kor" : null }
{ "_id" : 4, "eng" : null }

// 해결
> db.scores.find({ eng : { $in : [ null ], $exists : true } });
{ "_id" : 4, "eng" : null }
```

# 데이터 삽입/추가

## 데이터 삽입 - `insert`

`db.collectionName.insert({"key":"value"})`

## 다중 데이터 삽입

`db.collectionName.insert([{"key": value1},{"key": value2},{"key": value3}])`

→ JSON Object를 대괄호([])로 묶어서 콜론(,)으로 구분

→ 중복된 _id값일 경우 duplicate key 에러 발생 후 종료

`db.collectionName.insert([{"key": value1},{"key": value2},{"key": value3}],{"ordered": false})` : 에러발생후 나머지 데이터 넣기 "ordered:false"사용

```jsx
> db.users.insert({firstname:'joy', lastname: 'jeong', type: 'student'})
```

# 데이터 수정

→$set, $unset, $push, $pull

## 데이터베이스명

→ 변경하는 방법이 없는 것으로 보임.  

→ copyDatabase 통해서 구현하는데 비효율적임으로 데이터베이스명을 정할때는 신중

## 컬렉션명

`db.collection.renameCollection("컬렉션명");`

`db.emp.renameCollection("nemp");`

## 필드명 변경

`db.emp.updateMany( {}, {$rename:{"ename":"name"}})`

## 정보 수정(대체) - `update`

`db.colloectionName.update({조건}, {수정사항}, {옵션})`

→ 해당 데이터 교체 / 기존 데이터 지워지고 수정된 데이터로 대체

→ 조건에 부합되는 데이터 찾아 수정

→ 조건에 부합되는 데이터 중 첫번째 한 것만 수정 (여러건의 업데이트 multi:true 옵션 추가)

→ 조건에 부합되는 document가 없을 경우 insert하려면 upsert:true 옵션 추가

→ _id 필드 값 변경 불가

→ $set, $inc, $addToSet, $push, $pop, $pull 등

### option : { multi: false/true, upsert : false/true }

- multi (default false)
    
    → 한꺼번에 여러개 document 업데이트X 
    
    → 첫번째꺼 하나만 업데이트한다. 
    
    → noSQL이 atomic transaction이라는 개념을 유지하기 위해 default는 false이다.
    
- upsert (defult false)
    
    → 수정할 대상이 없는 경우 insert동작
    

## 정보 수정(변경) - `$set`

`db.collectionName.update({"찾는 key":"original_value"}, {"$set": {"수정할 데이터 key": "수정데이터"} })` 

→ 특정 필드의 값만 변경

→ 수정할 데이터 key가 있을 경우는 수정 없을 경우는 해당 필드 추가 

## 특정 필드 삭제 - `$unset`

`db.collectionName.update({"찾는 key": "value"}, {$unset: {"삭제할 데이터 key": "value"} })`

## 정보 1개 수정 - `updateOne`

`db.colloectionName.updateOne({조건}, {수정사항})`

## 다중 데이터 수정

`db.collectionName.updateMany({조건}, {수정사항})`

```go
> db.test.update({ 'sid': 's0' }, { 'sid': 's0000', 'score': 95 })
> db.test.update({ 'sid': 's1'}, { $set: { 'score': 100 } });
> db.test.update({ 'sid': 's8'}, { $unset: { 'score': 80 } });
//배열의 값 추가
> db.test.update({ 'sid': 's99' }, { '$push': { 'subject': 'OS' } });
//배열의 값 삭제
> db.test.update({ 'sid': 's99' }, { '$pull': { 'subject': 'java' } });

> db.test.updateOne({"zip":"12534"}, {"$set":{"pop":17630}});
//10개씩 증가
> db.zips.updateMany({"city":"HUDSON"}, {"$inc":{"pop":10}})

//club_del : string을 club_del : bool로 변경
db.getCollection('club').update({"club_del" : ""}, {$set:{"club_del" : false}}, false, true);
```

# 데이터 삭제

## 데이터 삭제

`db.collectionName.remove({'조건'})`

→ 인덱스 컬렉션 유지

## 데이터 전체 삭제

`db.collectionName.remove({});`

## 데이터 index포함 삭제

`db.collectionName.drop()`

# 기타

$inc

[Reference - MongoDB Manual](https://docs.mongodb.com/manual/reference/)

[Aggregation Pipeline Quick Reference - MongoDB Manual](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#aggregation-expressions)