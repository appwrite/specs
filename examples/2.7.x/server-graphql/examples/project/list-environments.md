```graphql
query {
    projectListEnvironments(
        queries: [],
        total: false
    ) {
        total
        environments {
            _id
            _createdAt
            _updatedAt
            projectId
            name
        }
    }
}
```
