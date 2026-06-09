```graphql
mutation {
    messagingCreateSesProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        accessKey: "<ACCESS_KEY>",
        secretKey: "<SECRET_KEY>",
        region: "<REGION>",
        fromName: "<FROM_NAME>",
        fromEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        replyToEmail: "email@example.com",
        enabled: false
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
    messagingCreateSesProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        accessKey: "<ACCESS_KEY>",
        secretKey: "<SECRET_KEY>",
        region: "<REGION>",
        fromName: "<FROM_NAME>",
        fromEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        replyToEmail: "email@example.com",
        enabled: false
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
