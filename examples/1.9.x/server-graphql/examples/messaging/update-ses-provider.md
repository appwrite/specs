```graphql
mutation {
    messagingUpdateSesProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        enabled: false,
        accessKey: "<ACCESS_KEY>",
        secretKey: "<SECRET_KEY>",
        region: "<REGION>",
        fromName: "<FROM_NAME>",
        fromEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        replyToEmail: "<REPLY_TO_EMAIL>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}
mutation {
    messagingUpdateSesProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        enabled: false,
        accessKey: "<ACCESS_KEY>",
        secretKey: "<SECRET_KEY>",
        region: "<REGION>",
        fromName: "<FROM_NAME>",
        fromEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        replyToEmail: "<REPLY_TO_EMAIL>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}
```
