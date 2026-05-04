```graphql
mutation {
    projectUpdateOAuth2Oidc(
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        wellKnownURL: "https://example.com",
        authorizationURL: "https://example.com",
        tokenUrl: "https://example.com",
        userInfoUrl: "https://example.com",
        enabled: false
    ) {
        _id
        enabled
        clientId
        clientSecret
        wellKnownURL
        authorizationURL
        tokenUrl
        userInfoUrl
    }
}
```
