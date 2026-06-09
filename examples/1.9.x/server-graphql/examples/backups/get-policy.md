```graphql
query {
    backupsGetPolicy(
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
        enabled
    }
}
```
