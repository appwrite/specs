```graphql
mutation {
    projectUpdateOAuth2Vipps(
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
