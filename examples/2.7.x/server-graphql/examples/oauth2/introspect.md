```graphql
mutation {
    oauth2Introspect(
        token: "<TOKEN>",
        tokenTypeHint: "access_token",
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>"
    ) {
        active
        token_use
        token_type
        scope
        client_id
        sub
        aud
        iss
        exp
        iat
        jti
        authorization_details
    }
}
```
