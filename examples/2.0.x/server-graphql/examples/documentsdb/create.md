```graphql
mutation {
    documentsDBCreate(
        databaseId: "<DATABASE_ID>",
        name: "<NAME>",
        enabled: false
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
