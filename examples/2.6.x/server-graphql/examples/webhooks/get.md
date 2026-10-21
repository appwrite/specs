```graphql
query {
    webhooksGet(
        webhookId: "<WEBHOOK_ID>"
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
