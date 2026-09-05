```graphql
mutation {
    projectUpdateOAuth2X(
        customerKey: "<CUSTOMER_KEY>",
        secretKey: "<SECRET_KEY>",
        enabled: false
    ) {
        _id
        enabled
        customerKey
        secretKey
    }
}
```
