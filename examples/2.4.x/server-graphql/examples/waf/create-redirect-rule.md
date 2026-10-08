```graphql
mutation {
    wafCreateRedirectRule(
        ruleId: "<RULE_ID>",
        resourceType: "api",
        name: "<NAME>",
        location: "<LOCATION>",
        statusCode: 300,
        resourceId: "<RESOURCE_ID>",
        description: "<DESCRIPTION>",
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
        location
        statusCode
    }
}
```
