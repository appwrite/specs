```graphql
mutation {
    mongoUpdateBackupPolicy(
        databaseId: "<DATABASE_ID>",
        policyId: "<POLICY_ID>",
        name: "<NAME>",
        schedule: "",
        retention: 1,
        enabled: false
    ) {
        _id
        name
        _createdAt
        _updatedAt
        services
        resources
        resourceId
        resourceType
        retention
        schedule
        type
        enabled
    }
}
```
