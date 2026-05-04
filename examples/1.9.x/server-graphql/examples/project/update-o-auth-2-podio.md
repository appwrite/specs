```graphql
mutation {
    projectUpdateOAuth2Podio(
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        enabled: false
    ) {
        _id
        enabled
        clientId
        clientSecret
    }
}
```
