```graphql
mutation {
    proxyCreateSiteRule(
        domain: "example.com",
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
    }
}
```
