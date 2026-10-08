```graphql
query {
    webhooksList(
        queries: [],
        total: false
    ) {
        total
        webhooks {
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
}
```
