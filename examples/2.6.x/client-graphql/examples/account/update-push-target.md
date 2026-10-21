```graphql
mutation {
    accountUpdatePushTarget(
        targetId: "<TARGET_ID>",
        identifier: "<IDENTIFIER>",
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
