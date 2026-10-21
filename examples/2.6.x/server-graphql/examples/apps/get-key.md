```graphql
query {
    appsGetKey(
        appId: "<APP_ID>",
        keyId: "<KEY_ID>"
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
