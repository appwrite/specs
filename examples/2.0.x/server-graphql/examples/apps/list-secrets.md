```graphql
query {
    appsListSecrets(
        appId: "<APP_ID>",
        queries: [],
        total: false
    ) {
        total
        secrets {
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
