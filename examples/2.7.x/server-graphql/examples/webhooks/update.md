```graphql
mutation {
    webhooksUpdate(
        webhookId: "<WEBHOOK_ID>",
        name: "<NAME>",
        url: "https://example.com/webhook",
        events: ["users.*.create"],
        enabled: false,
        tls: false,
        authUsername: "<AUTH_USERNAME>",
        authPassword: "password",
        description: "<DESCRIPTION>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        description
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
