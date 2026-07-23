```graphql
mutation {
    oauth2CreatePAR(
        clientId: "<CLIENT_ID>",
        redirectUri: "https://example.com",
        responseType: "code",
        scope: "<SCOPE>",
        state: "<STATE>",
        nonce: "<NONCE>",
        codeChallenge: "<CODE_CHALLENGE>",
        codeChallengeMethod: "s256",
        prompt: "<PROMPT>",
        maxAge: 0,
        authorizationDetails: "<AUTHORIZATION_DETAILS>",
        resource: "",
        audience: "<AUDIENCE>"
    ) {
        request_uri
        expires_in
    }
}
mutation {
    oauth2CreatePAR(
        clientId: "<CLIENT_ID>",
        redirectUri: "https://example.com",
        responseType: "code",
        scope: "<SCOPE>",
        state: "<STATE>",
        nonce: "<NONCE>",
        codeChallenge: "<CODE_CHALLENGE>",
        codeChallengeMethod: "s256",
        prompt: "<PROMPT>",
        maxAge: 0,
        authorizationDetails: "<AUTHORIZATION_DETAILS>",
        resource: "",
        audience: "<AUDIENCE>"
    ) {
        request_uri
        expires_in
    }
}
```
