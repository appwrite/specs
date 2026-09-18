```graphql
mutation {
    projectUpdateApplePlatform(
        platformId: "<PLATFORM_ID>",
        name: "<NAME>",
        bundleIdentifier: "<BUNDLE_IDENTIFIER>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        type
        bundleIdentifier
    }
}
```
