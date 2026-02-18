```graphql
mutation {
    backupsUpdatePolicy(
        policyId: "<POLICY_ID>",
        name: "<NAME>",
        retention: 1,
        schedule: "",
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
        enabled
    }
}
```
