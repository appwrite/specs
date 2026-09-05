```graphql
query {
    tablesDBGet(
        databaseId: "<DATABASE_ID>"
    ) {
        _id
        name
        _createdAt
        _updatedAt
        enabled
        type
        status
    }
}
```
