```graphql
mutation {
    functionsCreate(
        functionId: "<FUNCTION_ID>",
        name: "<NAME>",
        runtime: "node-14.5",
        execute: ["any"],
        events: [],
        schedule: "",
        timeout: 1,
        enabled: false,
        logging: false,
        entrypoint: "<ENTRYPOINT>",
        commands: "<COMMANDS>",
        scopes: [],
        installationId: "<INSTALLATION_ID>",
        providerRepositoryId: "<PROVIDER_REPOSITORY_ID>",
        providerBranch: "<PROVIDER_BRANCH>",
        providerSilentMode: false,
        providerRootDirectory: "<PROVIDER_ROOT_DIRECTORY>",
        providerBranches: [],
        providerPaths: [],
        buildSpecification: "",
        runtimeSpecification: "",
        deploymentRetention: 0
    ) {
        _id
        _createdAt
        _updatedAt
        execute
        name
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
            value
            secret
            resourceType
            resourceId
        }
        events
        schedule
        timeout
        entrypoint
        commands
        version
        installationId
        providerRepositoryId
        providerBranch
        providerRootDirectory
        providerSilentMode
        providerBranches
        providerPaths
        buildSpecification
        runtimeSpecification
    }
}
mutation {
    functionsCreate(
        functionId: "<FUNCTION_ID>",
        name: "<NAME>",
        runtime: "node-14.5",
        execute: ["any"],
        events: [],
        schedule: "",
        timeout: 1,
        enabled: false,
        logging: false,
        entrypoint: "<ENTRYPOINT>",
        commands: "<COMMANDS>",
        scopes: [],
        installationId: "<INSTALLATION_ID>",
        providerRepositoryId: "<PROVIDER_REPOSITORY_ID>",
        providerBranch: "<PROVIDER_BRANCH>",
        providerSilentMode: false,
        providerRootDirectory: "<PROVIDER_ROOT_DIRECTORY>",
        providerBranches: [],
        providerPaths: [],
        buildSpecification: "",
        runtimeSpecification: "",
        deploymentRetention: 0
    ) {
        _id
        _createdAt
        _updatedAt
        execute
        name
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
            value
            secret
            resourceType
            resourceId
        }
        events
        schedule
        timeout
        entrypoint
        commands
        version
        installationId
        providerRepositoryId
        providerBranch
        providerRootDirectory
        providerSilentMode
        providerBranches
        providerPaths
        buildSpecification
        runtimeSpecification
    }
}
```
