```graphql
mutation {
    wafUpdateDenyRule(
        ruleId: "<RULE_ID>",
        resourceType: "api",
        resourceId: "<RESOURCE_ID>",
        name: "<NAME>",
        description: "<DESCRIPTION>",
        priority: -100000,
        enabled: false,
        conditions: [],
        schedule: "{}"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        description
        teamId
        projectId
        resourceType
        resourceId
        action
        priority
        enabled
        conditions
        config
        schedule
    }
}
```
