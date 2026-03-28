```graphql
mutation {
    webhooksUpdate(
        webhookId: "<WEBHOOK_ID>",
        name: "<NAME>",
        url: "",
        events: [],
        enabled: false,
        security: false,
        httpUser: "<HTTP_USER>",
        httpPass: "<HTTP_PASS>"
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
