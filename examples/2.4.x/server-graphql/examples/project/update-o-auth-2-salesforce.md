```graphql
mutation {
    projectUpdateOAuth2Salesforce(
        customerKey: "<CUSTOMER_KEY>",
        customerSecret: "<CUSTOMER_SECRET>",
        prompt: [],
        enabled: false
    ) {
        _id
        enabled
        customerKey
        customerSecret
        prompt
    }
}
```
