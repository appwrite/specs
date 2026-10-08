```graphql
mutation {
    oauth2CreateGrant(
        userCode: "<USER_CODE>"
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
