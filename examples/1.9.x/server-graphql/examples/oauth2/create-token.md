```graphql
mutation {
    oauth2CreateToken(
        grantType: "<GRANT_TYPE>",
        code: "<CODE>",
        refreshToken: "<REFRESH_TOKEN>",
        deviceCode: "<DEVICE_CODE>",
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        codeVerifier: "<CODE_VERIFIER>",
        redirectUri: "https://example.com",
        resource: "",
        audience: "<AUDIENCE>"
    ) {
        access_token
        token_type
        expires_in
        refresh_token
        scope
        authorization_details
        id_token
    }
}
```
