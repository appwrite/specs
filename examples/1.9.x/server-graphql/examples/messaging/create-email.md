```graphql
mutation {
    messagingCreateEmail(
        messageId: "<MESSAGE_ID>",
        subject: "<SUBJECT>",
        content: "<CONTENT>",
        topics: [],
        users: [],
        targets: [],
        cc: [],
        bcc: [],
        attachments: [],
        draft: false,
        html: false,
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
