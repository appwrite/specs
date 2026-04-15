```graphql
mutation {
    webhooksCreate(
        webhookId: "<WEBHOOK_ID>",
        url: "",
        name: "<NAME>",
        events: [],
        enabled: false,
        tls: false,
        authUsername: "<AUTH_USERNAME>",
        authPassword: "<AUTH_PASSWORD>",
        secret: "<SECRET>"
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
