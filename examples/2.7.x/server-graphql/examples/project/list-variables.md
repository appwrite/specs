```graphql
query {
    projectListVariables(
        queries: [],
        total: false
    ) {
        total
        variables {
            _id
            _createdAt
            _updatedAt
            key
            description
            value
            secret
            resourceType
            resourceId
        }
    }
}
```
