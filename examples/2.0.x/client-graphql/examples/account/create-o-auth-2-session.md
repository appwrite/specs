```graphql
query {
    accountCreateOAuth2Session(
        provider: "amazon",
        success: "https://example.com",
        failure: "https://example.com",
        scopes: []
    ) {
        status
    }
}
```
