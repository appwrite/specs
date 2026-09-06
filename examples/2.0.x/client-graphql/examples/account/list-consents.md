```graphql
query {
    accountListConsents(
        queries: [],
        total: false
    ) {
        total
        consents {
            _id
            _createdAt
            _updatedAt
            userId
            appId
            cimdUrl
            scopes
            resources
            authorizationDetails
            expire
        }
    }
}
```
