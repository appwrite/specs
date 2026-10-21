```graphql
mutation {
    projectUpdateOAuth2Auth0(
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        endpoint: "<ENDPOINT>",
        enabled: false,
        prompt: []
    ) {
        _id
        enabled
        clientId
        clientSecret
        prompt
        endpoint
    }
}
```
