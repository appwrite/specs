```graphql
query {
    oauth2GetGrant(
        grantId: "<GRANT_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        userId
        appId
        scopes
        resources
        authorizationDetails
        prompt
        redirectUri
        authTime
        expire
    }
}
```
