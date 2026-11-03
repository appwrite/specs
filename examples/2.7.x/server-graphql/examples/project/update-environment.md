```graphql
mutation {
    projectUpdateEnvironment(
        environmentId: "<ENVIRONMENT_ID>",
        name: "<NAME>"
    ) {
        _id
        _createdAt
        _updatedAt
        projectId
        name
    }
}
```
