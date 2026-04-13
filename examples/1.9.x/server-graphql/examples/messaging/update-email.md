```graphql
mutation {
    messagingUpdateEmail(
        messageId: "<MESSAGE_ID>",
        topics: [],
        users: [],
        targets: [],
        subject: "<SUBJECT>",
        content: "<CONTENT>",
        draft: false,
        html: false,
        cc: [],
        bcc: [],
        scheduledAt: "2020-10-15T06:38:00.000+00:00",
        attachments: []
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
