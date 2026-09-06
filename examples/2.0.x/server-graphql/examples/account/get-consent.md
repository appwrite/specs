```graphql
query {
    accountGetConsent(
        consentId: "<CONSENT_ID>"
    ) {
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
```
