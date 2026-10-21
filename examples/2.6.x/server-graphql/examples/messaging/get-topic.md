```graphql
query {
    messagingGetTopic(
        topicId: "<TOPIC_ID>"
    ) {
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
```
