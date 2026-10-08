```graphql
mutation {
    projectUpdateOAuth2Auth0(
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        endpoint: "<ENDPOINT>",
        prompt: [],
        enabled: false
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
