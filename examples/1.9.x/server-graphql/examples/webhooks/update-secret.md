```graphql
mutation {
    webhooksUpdateSecret(
        webhookId: "<WEBHOOK_ID>",
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
mutation {
    webhooksUpdateSecret(
        webhookId: "<WEBHOOK_ID>",
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
