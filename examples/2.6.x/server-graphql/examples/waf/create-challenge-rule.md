```graphql
mutation {
    wafCreateChallengeRule(
        ruleId: "<RULE_ID>",
        resourceType: "api",
        name: "<NAME>",
        resourceId: "<RESOURCE_ID>",
        description: "<DESCRIPTION>",
        challengeType: "compute",
        priority: -100000,
        enabled: false,
        conditions: [],
        difficulty: 1,
        ttl: 900
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
        challengeType
        difficulty
        ttl
    }
}
```
