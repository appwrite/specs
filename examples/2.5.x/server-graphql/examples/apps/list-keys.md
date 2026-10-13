```graphql
query {
    appsListKeys(
        appId: "<APP_ID>",
        queries: [],
        total: false
    ) {
        total
        keys {
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
}
```
