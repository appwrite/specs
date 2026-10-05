```graphql
mutation {
    oauth2AuthorizePost(
        clientId: "<CLIENT_ID>",
        redirectUri: "https://example.com",
        responseType: "",
        scope: "<SCOPE>",
        state: "<STATE>",
        nonce: "<NONCE>",
        codeChallenge: "<CODE_CHALLENGE>",
        codeChallengeMethod: "s256",
        prompt: "<PROMPT>",
        maxAge: 0,
        authorizationDetails: "<AUTHORIZATION_DETAILS>",
        resource: "",
        audience: "<AUDIENCE>",
        requestUri: "<REQUEST_URI>"
    ) {
        grantId
        redirectUrl
    }
}
```
