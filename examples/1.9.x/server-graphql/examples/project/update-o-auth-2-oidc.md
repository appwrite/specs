```graphql
mutation {
    projectUpdateOAuth2Oidc(
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        wellKnownURL: "https://example.com",
        authorizationURL: "https://example.com",
        tokenURL: "https://example.com",
        userInfoURL: "https://example.com",
        enabled: false
    ) {
        _id
        enabled
        clientId
        clientSecret
        wellKnownURL
        authorizationURL
        tokenURL
        userInfoURL
    }
}
mutation {
    projectUpdateOAuth2Oidc(
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        wellKnownURL: "https://example.com",
        authorizationURL: "https://example.com",
        tokenURL: "https://example.com",
        userInfoURL: "https://example.com",
        enabled: false
    ) {
        _id
        enabled
        clientId
        clientSecret
        wellKnownURL
        authorizationURL
        tokenURL
        userInfoURL
    }
}
```
