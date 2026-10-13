```graphql
query {
    proxyListRules(
        queries: [],
        total: false
    ) {
        total
        rules {
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
}
```
