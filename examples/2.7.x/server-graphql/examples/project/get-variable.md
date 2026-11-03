```graphql
query {
    projectGetVariable(
        variableId: "<VARIABLE_ID>"
    ) {
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
```
