```graphql
mutation {
    projectUpdateLinuxPlatform(
        platformId: "<PLATFORM_ID>",
        name: "<NAME>",
        packageName: "<PACKAGE_NAME>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        type
        packageName
    }
}
```
