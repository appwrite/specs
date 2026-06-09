```graphql
mutation {
    messagingUpdateSMS(
        messageId: "<MESSAGE_ID>",
        topics: [],
        users: [],
        targets: [],
        content: "<CONTENT>",
        draft: false,
        scheduledAt: "2020-10-15T06:38:00.000+00:00"
    ) {
        _id
        _createdAt
        _updatedAt
        providerType
        topics
        users
        targets
        scheduledAt
        deliveredAt
        deliveryErrors
        deliveredTotal
        data
        status
    }
}
mutation {
    messagingUpdateSMS(
        messageId: "<MESSAGE_ID>",
        topics: [],
        users: [],
        targets: [],
        content: "<CONTENT>",
        draft: false,
        scheduledAt: "2020-10-15T06:38:00.000+00:00"
    ) {
        _id
        _createdAt
        _updatedAt
        providerType
        topics
        users
        targets
        scheduledAt
        deliveredAt
        deliveryErrors
        deliveredTotal
        data
        status
    }
}
```
