```graphql
mutation {
    proxyCreateRedirectRule(
        domain: "",
        url: "https://example.com",
        statusCode: "301",
        resourceId: "<RESOURCE_ID>",
        resourceType: "site"
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
    proxyCreateRedirectRule(
        domain: "",
        url: "https://example.com",
        statusCode: "301",
        resourceId: "<RESOURCE_ID>",
        resourceType: "site"
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
