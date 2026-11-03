```graphql
query {
    sitesList(
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        sites {
            _id
            _createdAt
            _updatedAt
            name
            description
            enabled
            live
            logging
            framework
            deploymentRetention
            deploymentId
            deploymentCreatedAt
            deploymentScreenshotLight
            deploymentScreenshotDark
            latestDeploymentId
            latestDeploymentCreatedAt
            latestDeploymentStatus
            scopes
            vars {
                _id
                _createdAt
                _updatedAt
                key
                description
                value
                secret
                resourceType
                resourceId
            }
            timeout
            installCommand
            buildCommand
            startCommand
            outputDirectory
            installationId
            providerRepositoryId
            providerBranch
            providerRootDirectory
            providerSilentMode
            providerBranches
            providerPaths
            buildSpecification
            runtimeSpecification
            buildRuntime
            adapter
            fallbackFile
        }
    }
}
```
