```graphql
query {
    functionsListDeployments(
        functionId: "<FUNCTION_ID>",
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        deployments {
            _id
            _createdAt
            _updatedAt
            type
            resourceId
            resourceType
            entrypoint
            sourceSize
            buildSize
            totalSize
            buildId
            activate
            screenshotLight
            screenshotDark
            status
            buildLogs
            buildDuration
            providerRepositoryName
            providerRepositoryOwner
            providerRepositoryUrl
            providerCommitHash
            providerCommitAuthorUrl
            providerCommitAuthor
            providerCommitMessage
            providerCommitUrl
            providerBranch
            providerBranchUrl
        }
    }
}
```
