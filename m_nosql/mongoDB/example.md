string -> object Array

```jsx
db.getCollection('collectionName').aggregate([
    // {"$match": {"social_id" : "naver_12345678"}},
    {
        $addFields: {
            "social_id.naver": { $substr: [ "$social_id", 6, 8] }
        }
    }
])
```

```jsx
db.getCollection('collectionName').update(
		{},
    [{
        $set: {
            "social_id.naver": { $substr: [ "$social_id", 6, 8] }
        }
    }]
)
```