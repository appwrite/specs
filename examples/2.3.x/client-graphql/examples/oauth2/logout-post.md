```graphql
mutation {
    oauth2LogoutPost(
        idTokenHint: "<ID_TOKEN_HINT>",
        logoutHint: "<LOGOUT_HINT>",
        clientId: "<CLIENT_ID>",
        postLogoutRedirectUri: "https://example.com",
        state: "<STATE>",
        uiLocales: "<UI_LOCALES>"
    ) {
        status
    }
}
```
