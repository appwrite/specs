```graphql
mutation {
    messagingUpdatePush(
        messageId: "<MESSAGE_ID>",
        topics: [],
        users: [],
        targets: [],
        title: "<TITLE>",
        body: "<BODY>",
        data: "{}",
        action: "<ACTION>",
        image: "<ID1:ID2>",
        icon: "<ICON>",
        sound: "<SOUND>",
        color: "<COLOR>",
        tag: "<TAG>",
        badge: 0,
        draft: false,
        scheduledAt: "2020-10-15T06:38:00.000+00:00",
        contentAvailable: false,
        critical: false,
        priority: "normal"
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
    messagingUpdatePush(
        messageId: "<MESSAGE_ID>",
        topics: [],
        users: [],
        targets: [],
        title: "<TITLE>",
        body: "<BODY>",
        data: "{}",
        action: "<ACTION>",
        image: "<ID1:ID2>",
        icon: "<ICON>",
        sound: "<SOUND>",
        color: "<COLOR>",
        tag: "<TAG>",
        badge: 0,
        draft: false,
        scheduledAt: "2020-10-15T06:38:00.000+00:00",
        contentAvailable: false,
        critical: false,
        priority: "normal"
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
