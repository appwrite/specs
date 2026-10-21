```graphql
mutation {
    wafUpdateRateLimitRule(
        ruleId: "<RULE_ID>",
        resourceType: "api",
        resourceId: "<RESOURCE_ID>",
        name: "<NAME>",
        description: "<DESCRIPTION>",
        limit: 1,
        interval: 1,
        key: "ip",
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
