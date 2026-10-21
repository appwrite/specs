```graphql
mutation {
    accountCreatePushTarget(
        targetId: "<TARGET_ID>",
        identifier: "<IDENTIFIER>",
        providerId: "<PROVIDER_ID>",
        bundleId: "<BUNDLE_ID>",
        environment: "sandbox"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        userId
        providerId
        providerType
        identifier
        expired
    }
}
```
