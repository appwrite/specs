```graphql
mutation {
    projectUpdateOAuth2Salesforce(
        customerKey: "<CUSTOMER_KEY>",
        customerSecret: "<CUSTOMER_SECRET>",
        enabled: false,
        prompt: []
    ) {
        _id
        enabled
        customerKey
        customerSecret
        prompt
    }
}
```
