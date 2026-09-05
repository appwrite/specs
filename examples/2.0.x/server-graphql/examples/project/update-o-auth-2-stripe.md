```graphql
mutation {
    projectUpdateOAuth2Stripe(
        clientId: "<CLIENT_ID>",
        apiSecretKey: "<API_SECRET_KEY>",
        enabled: false
    ) {
        _id
        enabled
        clientId
        apiSecretKey
    }
}
```
