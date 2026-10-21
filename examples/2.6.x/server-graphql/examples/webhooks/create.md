```graphql
mutation {
    webhooksCreate(
        webhookId: "<WEBHOOK_ID>",
        url: "https://example.com/webhook",
        name: "<NAME>",
        events: ["users.*.create"],
        enabled: false,
        tls: false,
        authUsername: "<AUTH_USERNAME>",
        authPassword: "password",
        secret: "<SECRET>",
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
