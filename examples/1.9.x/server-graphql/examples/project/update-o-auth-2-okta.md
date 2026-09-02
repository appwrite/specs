```graphql
mutation {
    projectUpdateOAuth2Okta(
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        domain: "example.com",
        authorizationServerId: "<AUTHORIZATION_SERVER_ID>",
        enabled: false
    ) {
        _id
        enabled
        clientId
        clientSecret
        domain
        authorizationServerId
    }
}
```
