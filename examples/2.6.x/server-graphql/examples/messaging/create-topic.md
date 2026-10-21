```graphql
mutation {
    messagingCreateTopic(
        topicId: "<TOPIC_ID>",
        name: "<NAME>",
        subscribe: ["any"],
        qos: 0,
        expiry: 0,
        description: "<DESCRIPTION>"
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
