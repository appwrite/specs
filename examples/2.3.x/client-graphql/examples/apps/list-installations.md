```graphql
query {
    appsListInstallations(
        appId: "<APP_ID>",
        queries: [],
        total: false
    ) {
        total
        installations {
            _id
            _createdAt
            _updatedAt
            appId
            teamId
            scopes
            authorizationDetails
            createdById
            createdByName
            lastAccessedAt
        }
    }
}
```
