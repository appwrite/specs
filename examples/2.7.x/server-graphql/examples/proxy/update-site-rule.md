```graphql
mutation {
    proxyUpdateSiteRule(
        ruleId: "<RULE_ID>",
        siteId: "<SITE_ID>",
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
