## GO Lang

→ bson.M 앞에다가 다 추가

~~→~~ []interface{}{} = []

```jsx
query := []bson.M{
		{
			"$facet": bson.M{
				"read_stat": []bson.M{
					{
						"$project": bson.M{
							"_id":  "$brd_no",
							"stat": bson.M{"$ifNull": []interface{}{"$brd_read_stat", -9999}},
						},
					},
				},
				"write_stat": []bson.M{
					{
						"$project": bson.M{
							"_id":  "$brd_no",
							"stat": bson.M{"$ifNull": []interface{}{"$brd_write_stat", -9999}},
						},
					},
				},
				"cmt_stat": []bson.M{
					{
						"$project": bson.M{
							"_id":  "$brd_no",
							"stat": bson.M{"$ifNull": []interface{}{"$cmt_write_stat", -9999}},
						},
					},
				},
				"brd_check_type": []bson.M{
					{
						"$project": bson.M{
							"_id":  "$brd_no",
							"type": bson.M{"$ifNull": []interface{}{"$brd_check_type", "all"}},
						},
					},
				},
			},
		},
	}
```

```jsx
db.getCollection('board').aggregate([
	{
	  "$facet": {
	    "read_stat": [
			{
		    "$project": {
					"_id":  210,
					"stat": {"$ifNull": ["$brd_read_stat", -9999]},
	      },
			},
			],
      "write_stat": [
			{
	      "$project":{
		      "_id":  210,
		      "stat": {"$ifNull": ["$brd_write_stat", -9999]},
	      },
			},
      ],
      "cmt_stat": [
			{
	      "$project": {
					"_id":  210,
					"stat": {"$ifNull": ["$cmt_write_stat", -9999]},
				},
			},
	    ],
      "brd_check_type": [
			{
				"$project": {
					"_id":  210,
					"type": {"$ifNull": ["$brd_check_type", "all"]},
				},
			},
			],
		},
	}
])
```

## pipeline

→ 파이프라인

→ 이전 단계의 연산 결과를 다음 단계 연산에 이용

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e121fba-f806-4807-8c3b-754c41c44a09/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e121fba-f806-4807-8c3b-754c41c44a09/Untitled.png)

## aggregation

→ `db.collection.aggregate`

→ stages

→ array 순서대로 가공

→ $out/$geoNear 제외 파이프라인 여러번 사용가능

→ 오라클 pl/sql

# 기본 stage

## $match

→ [RDBMS] where / having 

→ `{ $match: { $expr: { <aggregation expression> } } }`

→ 조건에 맞는 문서들만 찾는다. 필터링에 맞는 것만 찾으므로 전체 문서의 개수를 줄일 수 있다.

→ find 명령어 비슷

```go
// rating이 4 이상인 것을 먼저 걸러내고, rating 기준으로 user_id를 user_ids라는 이름의 배열로 만들어라
db.rating.aggregate([
    {$match: {rating: {$gte: 4}}},
    {$group: {_id: "$rating", user_ids: {$push: "$user_id"}}}
])

db.articles.aggregate([ 
		{ $match : { author : "dave" } } 
]);
```

## $group

→ [RDBMS] group by

→ `{ $group: { _id: <expression>, <field1>: { <accumulator1> : <expression1> }, ... } }`

→ filter

→ 조건 , 기준 필드를 주고 맞는 그룹을 만드는 것.

→ 그룹에 대한 id 지정, 특정필드에 대한 집계 연산 가능 (연산된 document 대한 정렬 지원X) 

→ $first, $last, $max, $min, $avg, $sum,

→ $push, $addToSet (둘 다 배열을 반환하지만 push는 중복 허용, addToSet은 중복 제거)

```go
// rating을 기준으로 그루핑하되 도큐먼트당 1씩을 더한 값을 count필드로 만들어라.
db.rating.aggregate([
    {$group: {_id: "$rating", count: {$sum: 1}}}
])

// rating을 기준으로 그루핑하되 그룹 내 도큐먼트 중 user_id 최대 값을 test필드로 만들어라
db.rating.aggregate([
    {$group: {_id: "$rating", test: {$max: "$user_id"}}}
])

// rating을 기준으로 그루핑하되 그룹 내 도큐먼트 중 user_id 필드를 배열로 반환하라(중복 허용)
db.rating.aggregate([
    {$group: {_id: "$rating", test: {$push: "$user_id"}}}
])
```

### $addToSet

→ id로 Grouping 한 데이터를 중복되지 않은 Set의 형태로 저장

### $avg

→ 숫자 값의 평균을 반환 (숫자가 아닌 값을 무시)

### $first

→ 각 그룹에 대한 첫 번째 Document의 값을 반환

→ Document가 정의된 순서가 있는 경우에만 ordering을 지원 

### $last

→ 각 그룹에 대한 마지막 Document의 값을 반환. 

→ Document가 정의된 순서가 있는 경우에만 ordering을 지원 

### $max

→ 각 그룹에서 가장 큰 값을 반환 

### $mergeObjects

→ 각 그룹에 대한 입력 Document를 조합하여 작성한 Document를 반환

### $min

→ 각 그룹에서 가장 작은 값을 반환 

### $push

→ 각 그룹의 필드 값의 배열을 반환 

### $stdDevPop

→ 입력 값의 모집단 표준 편차를 반환 

### $stdDevSamp

→ 입력 값의 샘플 표준 편차를 반환

### $sum

→ 각 그룹의 숫자형 데이터의 합을 반환. 숫자가 아닌 값은 무시

```go
{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-03-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-03-01T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-03-15T09:00:00Z") }
{ "_id" : 4, "item" : "xyz", "price" : 5, "quantity" : 20, "date" : ISODate("2014-04-04T11:21:39.736Z") }
{ "_id" : 5, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-04-04T21:23:13.331Z") }

db.sales.aggregate([
      { $group : {
					 //년/월/일을 기준으로 집계
           _id : { month: { $month: "$date" }, day: { $dayOfMonth: "$date" }, year: { $year: "$date" } },
           //$price x $quantity 를 곱한 값의 합을 totalPrice 필드로 지정
					 totalPrice: { $sum: { $multiply: [ "$price", "$quantity" ] } }, 
					 //$quantity 필드 값의 평균을 averageQuantity 필드로 지정
           averageQuantity: { $avg: "$quantity" }, 
					 //Group별 데이터의 갯수를 count 로 지정
           count: { $sum: 1 } 
       } }])

//결과
{   "_id" : { "month" : 3, "day" : 15, "year" : 2014 }, 
    "totalPrice" : 50, 
    "averageQuantity" : 10, 
    "count" : 1 
},{ 
    "_id" : { "month" : 4, "day" : 4, "year" : 2014 }, 
    "totalPrice" : 200, 
    "averageQuantity" : 15, 
    "count" : 2 
},{ 
    "_id" : { "month" : 3, "day" : 1, "year" : 2014 }, 
    "totalPrice" : 40, 
    "averageQuantity" : 1.5, 
    "count" : 2 }
```

## $project

→ [RDBMS] select

→ `{ $project: { <specification(s)> } }`

→ `<field>: <1 or true>` 0/false: 기존 필드 표기X

→  `_id: <0 or false>` 1/true: 기존 필드 표기

→ `<field>: <expression>` 새로운 필드 추가

→ 실제로 가져올 데이터 표시

→ 문서에 필드가 여러 개 있는데 최종적으로 문서의 필드 중 보고 싶은 필드만 찍어준다

→ rename, add, remove

```go
// _id를 숨기고, rating만 표기하라
db.rating.aggregate([
    {$project: {_id: 0, rating: 1}}
])

// test라는 이름의 새로운 필드를 생성하라
db.rating.aggregate([
    {$project: {_id: 0, rating: 1, test: "hell world"}}
])

// multiply라는 필드를 만들어라
db.rating.aggregate([
    {$project: {_id: 0, multiply: {
            $multiply: ["$_id", "$user_id"]
     }}}
])
```

### $toLower

→ 소문자 출력

### $toUpper

→ 대문자 출력

### $substr

→ 해당 필드 부분만 가져오는 것

### $strcasecmp

→ 문자열 비교

→ 1: true / -1: false

### $ifNull

→ null일 경우 뒤에 쓴 것으로 대체

## $sum

→ [RDBMS] sum() / count()

## $unwind

→ 배열요소를 분리

### path

→ 배열 필드의 필드 경로

→ 필드 경로를 지정하려면 $ 기호를 사용하여 필드 이름에 접두사를 붙이고 따옴표 (ex : "$arrayField")

### includeArrayIndex

→ 요소의 배열 index값을 저장할 새 필드의 이름. 

→ 이름은 달러 기호 "$"로 시작할 수 없습니다. (필수 아님)

### preserveNullAndEmptyArrays

→ 만약 true로 설정 시, path Field값이 null, 빈 배열인 경우에 $unwind 연산 결과가 Document에 표시 됨.

→ 만약 false로 설정 시,$unwind 연산 결과가 Document에 표시 되지 않음. (default false)

```go
{  $unwind:
    {
      path: <field path>,
      includeArrayIndex: <string>, // 분리할 때 인덱스 필드를 생성하고 싶으면 인덱스 이름을 지정하자
      preserveNullAndEmptyArrays: <boolean> // true면 인 요소도 도큐먼트로 생성(default: false)
    } }
```

```go
//sizes의 배열 요소로 분리함
{ "_id" : 1, "item" : "ABC1", sizes: [ "S", "M", "L"] }

db.inventory.aggregate( [ { $unwind : "$sizes" } ] )
{ "_id" : 1, "item" : "ABC1", "sizes" : "S" }
{ "_id" : 1, "item" : "ABC1", "sizes" : "M" }
{ "_id" : 1, "item" : "ABC1", "sizes" : "L" }
```

```go
{ "_id" : 1, "item" : "ABC", "sizes": [ "S", "M", "L"] }
{ "_id" : 2, "item" : "EFG", "sizes" : [ ] }
{ "_id" : 3, "item" : "IJK", "sizes": "M" }
{ "_id" : 4, "item" : "LMN" }
{ "_id" : 5, "item" : "XYZ", "sizes" : null }
//sizes 배열의 요소의 순번 표시
db.inventory.aggregate( [ 
	{ $unwind: { path: "$sizes", includeArrayIndex: "arrayIndex" } } 
] )

{ "_id" : 1, "item" : "ABC", "sizes" : "S", "arrayIndex" : NumberLong(0) }
{ "_id" : 1, "item" : "ABC", "sizes" : "M", "arrayIndex" : NumberLong(1) }
{ "_id" : 1, "item" : "ABC", "sizes" : "L", "arrayIndex" : NumberLong(2) }
{ "_id" : 3, "item" : "IJK", "sizes" : "M", "arrayIndex" : null }

//sizes의 원소가 없거나 null이어도 출력
db.inventory.aggregate( [
   { $unwind: { path: "$sizes", preserveNullAndEmptyArrays: true } }
] )

{ "_id" : 1, "item" : "ABC", "sizes" : "S" }
{ "_id" : 1, "item" : "ABC", "sizes" : "M" }
{ "_id" : 1, "item" : "ABC", "sizes" : "L" }
{ "_id" : 2, "item" : "EFG" }
{ "_id" : 3, "item" : "IJK", "sizes" : "M" }
{ "_id" : 4, "item" : "LMN" }
{ "_id" : 5, "item" : "XYZ", "sizes" : null }
```

```go
db.rating.aggregate([
    {$match: {rating: {$gte: 4}}},
    {$group: {_id: "$rating", user_ids: {$push: "$user_id"}}},
    {$unwind: "$user_ids"}
])

// $unwind를 적용하지 않은 경우
{
    "_id" : 5.0,
    "user_ids" : [ 
        6.0, 
        9.0, 
        10.0, 
        5.0
    ]
}

// $unwind를 적용한 경우
{"_id" : 5.0,"user_ids" : 5.0}
{"_id" : 5.0,"user_ids" : 6.0}
{"_id" : 5.0,"user_ids" : 9.0}
{"_id" : 5.0,"user_ids" : 10.0}
```

## $lookup

→ 서로 다른 컬렉션의 정보를 합칠 수 있는 스테이지

→ 같은 DB, 샤딩X

```go
{
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
}
```

```go
db.board.aggregate([
    {"$lookup": {
				from: "category", // board에서 category 컬렉션 조인 (연결할 콜렉션)
				localField: "_id", // board 매칭시킬 현재 필드
				foreignField: "section_name", // category에서 매칭시킬 콜렉션의 필드
				as: "category", // 결과 출력시 생성할 필드 이름 (로컬필드와 같게하면 기존값은 사라짐)
     }},
    {$limit: 1}
]) 
```

## $addField

→ `{ $addFields: { <newField>: <expression>, ... } }`

→ 기존필드에 document 새 필드 추가

→ 조회하는 용도

```go
{
  _id: 1,
  student: "Maya",
  homework: [ 10, 5, 10 ],
  quiz: [ 10, 8 ],
  extraCredit: 0
},{
  _id: 2,
  student: "Ryan",
  homework: [ 5, 6, 5 ],
  quiz: [ 8, 8 ],
  extraCredit: 8
}

db.scores.aggregate( [
   {
     $addFields: {
       totalHomework: { $sum: "$homework" } ,
       totalQuiz: { $sum: "$quiz" }
     }
   }, {
     $addFields: { totalScore:
       { $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] } }
   }
] )

{
  _id : 1,
  student : "Maya",
  homework : [ 10, 5, 10 ],
  quiz : [ 10, 8 ],
  extraCredit : 0,
  totalHomework : 25, //추가
  totalQuiz : 18, //추가
  totalScore : 43 //추가
},{
  _id : 2,
  student : "Ryan",
  homework : [ 5, 6, 5 ],
  quiz : [ 8, 8 ],
  extraCredit : 8, 
  totalHomework : 16, //추가
  totalQuiz : 16, //추가
  totalScore : 40 //추가
}
```

# 입력 제어 stage

## $sort

→ [RDBMS] order by

→ 정렬 조건에 맞게 연산결과 정렬

→ 1: 오름차순 / -1: 내림차순

→ `{ $sort: { <field1>: <sort order>, <field2>: <sort order> ... } }`

## $limit

→ [RDBMS] limit

→ 입력된 숫자만큼 출력

→ `{ $limit: <positive integer> }`

## $skip

→ 입력된 숫자 만큼 생략

→ `{ $skip: <positive integer> }` 

```go
// user_id로 내림차순을 하고, 위에서부터 5개만 추린 뒤 1개를 제외하고 출력하라
db.rating.aggregate([
    {$sort: {user_id: -1}},
    {$limit: 5},
    {$skip: 1}
])]
```

## $sample

→ collection 내에서 입력한 갯수만큼 Random 하게 document 출력

```go
{ "_id" : 1, "name" : "dave123", "q1" : true, "q2" : true }
{ "_id" : 2, "name" : "dave2", "q1" : false, "q2" : false  }
{ "_id" : 3, "name" : "ahn", "q1" : true, "q2" : true  }
{ "_id" : 4, "name" : "li", "q1" : true, "q2" : false  }
{ "_id" : 5, "name" : "annT", "q1" : false, "q2" : true  }
{ "_id" : 6, "name" : "li", "q1" : true, "q2" : true  }
{ "_id" : 7, "name" : "ty", "q1" : false, "q2" : true  }

db.users.aggregate(
   [ { $sample: { size: 3 } } ]
)

{ "_id" : 2, "name" : "dave2", "q1" : false, "q2" : false  }
{ "_id" : 4, "name" : "li", "q1" : true, "q2" : false  }
{ "_id" : 7, "name" : "ty", "q1" : false, "q2" : true  }
```

## $Count

→ `{ $count: <string> }`

→ 스테이지에 입력하는 문서 수의 카운트가 포함된 문서 전달

```go
{ "_id" : 1, "subject" : "History", "score" : 88 }
{ "_id" : 2, "subject" : "History", "score" : 92 }
{ "_id" : 3, "subject" : "History", "score" : 97 }
{ "_id" : 4, "subject" : "History", "score" : 71 }
{ "_id" : 5, "subject" : "History", "score" : 79 }
{ "_id" : 6, "subject" : "History", "score" : 83 }

db.scores.aggregate(
  [
    {
      $match: {
        score: {
          $gt: 80
        }
      }
    },
    {
      $count: "passing_scores"
    }
  ]
)

//결과
{ "passing_scores" : 4 }
```

### pipeline 순서대로 처리

- $project, $match, $limit, $skip, $unwind, $group, $sort

[Aggregation Pipeline Quick Reference - MongoDB Manual](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#aggregation-expressions)