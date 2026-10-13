```graphql
mutation {
    projectCreateWebPlatform(
        platformId: "<PLATFORM_ID>",
        name: "<NAME>",
        hostname: "app.example.com"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        type
        hostname
    }
}
```
