```graphql
query {
    accountCreateOAuth2Token(
        provider: "amazon",
        success: "https://example.com",
        failure: "https://example.com",
        scopes: []
    ) {
        status
    }
}
```
