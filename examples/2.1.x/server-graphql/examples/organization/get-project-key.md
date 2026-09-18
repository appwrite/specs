```graphql
query {
    organizationGetProjectKey(
        projectId: "<PROJECT_ID>",
        keyId: "<KEY_ID>"
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
