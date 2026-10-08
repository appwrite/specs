```graphql
mutation {
    messagingCreateTopic(
        topicId: "<TOPIC_ID>",
        name: "<NAME>",
        subscribe: ["any"],
        qos: 0,
        expiry: 0
    ) {
        _id
        _createdAt
        _updatedAt
        name
        emailTotal
        smsTotal
        pushTotal
        subscribe
        qos
        expiry
    }
}
```
