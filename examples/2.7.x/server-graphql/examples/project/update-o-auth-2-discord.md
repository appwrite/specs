```graphql
mutation {
    projectUpdateOAuth2Discord(
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        enabled: false,
        prompt: []
    ) {
        _id
        enabled
        clientId
        clientSecret
        prompt
    }
}
```
