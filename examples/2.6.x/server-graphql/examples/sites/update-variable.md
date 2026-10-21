```graphql
mutation {
    sitesUpdateVariable(
        siteId: "<SITE_ID>",
        variableId: "<VARIABLE_ID>",
        key: "<KEY>",
        value: "<VALUE>",
        secret: false,
        description: "<DESCRIPTION>"
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
