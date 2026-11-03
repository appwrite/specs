```graphql
mutation {
    projectUpdateWindowsPlatform(
        platformId: "<PLATFORM_ID>",
        name: "<NAME>",
        packageIdentifierName: "<PACKAGE_IDENTIFIER_NAME>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        type
        packageIdentifierName
    }
}
```
