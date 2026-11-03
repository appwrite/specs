```graphql
query {
    mysqlGetBackupPolicy(
        databaseId: "<DATABASE_ID>",
        policyId: "<POLICY_ID>"
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
