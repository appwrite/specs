```graphql
mutation {
    messagingCreateAppwriteProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        enabled: false,
        qos: 0,
        expiry: 0
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
