```graphql
query {
    organizationListProjectKeys(
        projectId: "<PROJECT_ID>",
        queries: [],
        total: false
    ) {
        total
        keys {
            _id
            _createdAt
            _updatedAt
            name
            expire
            scopes
            secret
            accessedAt
            sdks
        }
    }
}
```
