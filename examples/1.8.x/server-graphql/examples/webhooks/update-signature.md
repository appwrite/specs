```graphql
mutation {
    webhooksUpdateSignature(
        webhookId: "<WEBHOOK_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        url
        events
        security
        httpUser
        httpPass
        signatureKey
        enabled
        logs
        attempts
    }
}
```
