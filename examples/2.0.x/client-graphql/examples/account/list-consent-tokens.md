```graphql
query {
    accountListConsentTokens(
        consentId: "<CONSENT_ID>",
        queries: [],
        total: false
    ) {
        total
        tokens {
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
}
```
