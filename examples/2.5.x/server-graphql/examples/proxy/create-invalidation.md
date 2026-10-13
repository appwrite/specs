```graphql
mutation {
    proxyCreateInvalidation(
        domain: "example.com",
        type: "tag",
        reference: "<REFERENCE>"
    ) {
        domain
        type
        reference
        status
    }
}
```
