```graphql
mutation {
    projectCreateEnvironment(
        environmentId: "<ENVIRONMENT_ID>",
        name: "<NAME>",
        resources: ["database", "table", "column", "index", "bucket", "team", "function", "environment-variable"]
    ) {
        _id
        _createdAt
        _updatedAt
        projectId
        name
    }
}
```
