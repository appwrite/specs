```graphql
mutation {
    postgresqlCreateBackupPolicy(
        databaseId: "<DATABASE_ID>",
        policyId: "<POLICY_ID>",
        name: "<NAME>",
        schedule: "",
        retention: 1,
        type: "full",
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
