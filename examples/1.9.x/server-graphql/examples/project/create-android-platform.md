```graphql
mutation {
    projectCreateAndroidPlatform(
        platformId: "<PLATFORM_ID>",
        name: "<NAME>",
        applicationId: "<APPLICATION_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        type
        applicationId
    }
}
```
