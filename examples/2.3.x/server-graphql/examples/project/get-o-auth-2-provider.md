```graphql
query {
    projectGetOAuth2Provider(
        providerId: "amazon"
    ) {
        _id
        enabled
        clientId
        clientSecret
    }
}
```
