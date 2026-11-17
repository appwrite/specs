```graphql
mutation {
    proxyUpdateFunctionRule(
        ruleId: "<RULE_ID>",
        functionId: "<FUNCTION_ID>",
        branch: "<BRANCH>"
    ) {
        _id
        _createdAt
        _updatedAt
        domain
        type
        trigger
        redirectUrl
        redirectStatusCode
        deploymentId
        deploymentResourceType
        deploymentResourceId
        deploymentVcsProviderBranch
        status
        logs
        renewAt
        expireAt
        certificateStatus
        protocol
    }
}
```
