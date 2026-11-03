```graphql
query {
    wafGetRule(
        ruleId: "<RULE_ID>"
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
    }
}
```
