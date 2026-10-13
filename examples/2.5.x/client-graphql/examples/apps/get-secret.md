```graphql
query {
    appsGetSecret(
        appId: "<APP_ID>",
        secretId: "<SECRET_ID>"
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
