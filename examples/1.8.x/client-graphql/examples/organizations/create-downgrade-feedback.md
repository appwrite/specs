```graphql
mutation {
    organizationsCreateDowngradeFeedback(
        organizationId: "<ORGANIZATION_ID>",
        reason: "<REASON>",
        message: "<MESSAGE>",
        fromPlanId: "<FROM_PLAN_ID>",
        toPlanId: "<TO_PLAN_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        title
        message
        fromPlanId
        toPlanId
        teamId
        userId
        version
    }
}
```
