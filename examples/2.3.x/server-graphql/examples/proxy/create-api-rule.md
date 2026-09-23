```graphql
mutation {
    proxyCreateAPIRule(
        domain: "example.com"
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
