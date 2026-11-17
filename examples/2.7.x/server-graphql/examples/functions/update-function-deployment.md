```graphql
mutation {
    functionsUpdateFunctionDeployment(
        functionId: "<FUNCTION_ID>",
        deploymentId: "<DEPLOYMENT_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        execute
        name
        description
        enabled
        live
        logging
        runtime
        deploymentRetention
        deploymentId
        deploymentCreatedAt
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
        events
        schedule
        interval
        timeout
        entrypoint
        commands
        version
        installationId
        providerRepositoryId
        providerBranch
        providerRootDirectory
        providerSilentMode
        providerComments
        providerDeployments
        providerStatuses
        providerBranches
        providerPaths
        buildSpecification
        runtimeSpecification
        emailEnabled
    }
}
```
