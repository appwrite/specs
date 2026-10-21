```graphql
query {
    messagingListTopics(
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        topics {
            _id
            _createdAt
            _updatedAt
            name
            description
            emailTotal
            smsTotal
            pushTotal
            subscribe
            qos
            expiry
        }
    }
}
```
