```graphql
mutation {
    webhooksUpdate(
        webhookId: "<WEBHOOK_ID>",
        name: "<NAME>",
        url: "https://example.com/webhook",
        events: [],
        enabled: false,
        tls: false,
        authUsername: "<AUTH_USERNAME>",
        authPassword: "password"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        url
        events
        tls
        authUsername
        authPassword
        secret
        enabled
        logs
        attempts
    }
}
```
