### change → finish 단어 변경

```sql
db.getCollection('collectionName').updateMany(
  { key: { $regex: "change" } },
  [{
    $set: { key: {
      $concat: [
        { $arrayElemAt: [ { $split: [ "$key", "change" ] }, 0 ] },
        "finish",
        { $arrayElemAt: [ { $split: [ "$key", "change" ] }, 1 ] }
      ]
    }}
  }]
)
```

### string to object

```sql
db.collection.update({},
[
  {
    $set: {
      "object_group.object_one": "$object_one",
      "object_group.object_two": "$object_two",
      "object": {
        "object_ko": "$object"
      }
    }
  },
  {
    $unset: [
      "object_one",
      "object_two"
    ]
  }
],
{
  multi: true
})
```

### string to array object

```sql
db.collection.update({},
[
  {
    $set: {
      "array": [
        {
          "object_one": "$object_one",
          "object_two": "$object_two",
          
        }
      ],
      "object": {
        "object_ko": "$object"
      }
    }
  },
  {
    $unset: [
      "object_one",
      "object_two"
    ]
  }
],
{
  multi: true
})
```

### object to array

```sql
db.collection.update({},
[
  {
    $set: {
      "object": [
        "$object"
      ]
    }
  },
  
],
{
  multi: true
})
```