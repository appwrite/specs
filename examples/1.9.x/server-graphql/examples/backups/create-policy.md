```graphql
mutation {
    backupsCreatePolicy(
        policyId: "<POLICY_ID>",
        services: [],
        retention: 1,
        schedule: "",
        name: "<NAME>",
        resourceId: "<RESOURCE_ID>",
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
mutation {
    backupsCreatePolicy(
        policyId: "<POLICY_ID>",
        services: [],
        retention: 1,
        schedule: "",
        name: "<NAME>",
        resourceId: "<RESOURCE_ID>",
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
