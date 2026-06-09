```graphql
mutation {
    proxyCreateSiteRule(
        domain: "",
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
mutation {
    proxyCreateSiteRule(
        domain: "",
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
