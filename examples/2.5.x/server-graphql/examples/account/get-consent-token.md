```graphql
query {
    accountGetConsentToken(
        consentId: "<CONSENT_ID>",
        tokenId: "<TOKEN_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        consentId
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
