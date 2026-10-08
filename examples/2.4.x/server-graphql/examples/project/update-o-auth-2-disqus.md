```graphql
mutation {
    projectUpdateOAuth2Disqus(
        publicKey: "<PUBLIC_KEY>",
        secretKey: "<SECRET_KEY>",
        enabled: false
    ) {
        _id
        enabled
        publicKey
        secretKey
    }
}
```
