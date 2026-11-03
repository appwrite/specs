```graphql
mutation {
    projectCreateAndroidPlatform(
        platformId: "<PLATFORM_ID>",
        name: "<NAME>",
        applicationId: "<APPLICATION_ID>",
        fingerprints: []
    ) {
        _id
        _createdAt
        _updatedAt
        name
        type
        applicationId
        fingerprints
    }
}
```
