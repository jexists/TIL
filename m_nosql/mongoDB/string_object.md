### 글자 substr

```
db.getCollection('user').aggregate([
    {
        $addFields: {
            "id.hello": { $substr: [ "$id", 6, 8] }
        }
    }
])
```

```
db.getCollection('user').update(
		{},
    [{
        $set: {
            "id.hello": { $substr: [ "$id", 6, 8] }
        }
    }]
)
```

```
user = {"id" : "hello_73049872"}

user = {"id": {"hello": 73049872}}

```