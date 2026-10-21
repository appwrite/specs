```graphql
mutation {
    appsCreateKey(
        appId: "<APP_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        appId
        secret
        hint
        createdById
        createdByName
        lastAccessedAt
    }
}
```
