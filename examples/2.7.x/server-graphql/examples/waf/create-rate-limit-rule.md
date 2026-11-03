```graphql
mutation {
    wafCreateRateLimitRule(
        ruleId: "<RULE_ID>",
        resourceType: "api",
        name: "<NAME>",
        limit: 1,
        interval: 1,
        resourceId: "<RESOURCE_ID>",
        description: "<DESCRIPTION>",
        key: "ip",
        strategy: "fixedWindow",
        maxBucketSize: 1,
        priority: -100000,
        enabled: false,
        conditions: []
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
        limit
        interval
        key
        strategy
        maxBucketSize
    }
}
```
