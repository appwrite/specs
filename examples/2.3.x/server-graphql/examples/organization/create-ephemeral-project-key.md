```graphql
mutation {
    organizationCreateEphemeralProjectKey(
        projectId: "<PROJECT_ID>",
        scopes: [],
        duration: 600
    ) {
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
```
