```graphql
mutation {
    sitesCreate(
        siteId: "<SITE_ID>",
        name: "<NAME>",
        framework: "analog",
        buildRuntime: "node-14.5",
        enabled: false,
        logging: false,
        timeout: 1,
        installCommand: "<INSTALL_COMMAND>",
        buildCommand: "<BUILD_COMMAND>",
        startCommand: "<START_COMMAND>",
        outputDirectory: "<OUTPUT_DIRECTORY>",
        adapter: "static",
        installationId: "<INSTALLATION_ID>",
        fallbackFile: "<FALLBACK_FILE>",
        providerRepositoryId: "<PROVIDER_REPOSITORY_ID>",
        providerBranch: "<PROVIDER_BRANCH>",
        providerSilentMode: false,
        providerRootDirectory: "<PROVIDER_ROOT_DIRECTORY>",
        providerBranches: [],
        providerPaths: [],
        buildSpecification: "",
        runtimeSpecification: "",
        deploymentRetention: 0,
        scopes: []
    ) {
        _id
        _createdAt
        _updatedAt
        name
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
mutation {
    sitesCreate(
        siteId: "<SITE_ID>",
        name: "<NAME>",
        framework: "analog",
        buildRuntime: "node-14.5",
        enabled: false,
        logging: false,
        timeout: 1,
        installCommand: "<INSTALL_COMMAND>",
        buildCommand: "<BUILD_COMMAND>",
        startCommand: "<START_COMMAND>",
        outputDirectory: "<OUTPUT_DIRECTORY>",
        adapter: "static",
        installationId: "<INSTALLATION_ID>",
        fallbackFile: "<FALLBACK_FILE>",
        providerRepositoryId: "<PROVIDER_REPOSITORY_ID>",
        providerBranch: "<PROVIDER_BRANCH>",
        providerSilentMode: false,
        providerRootDirectory: "<PROVIDER_ROOT_DIRECTORY>",
        providerBranches: [],
        providerPaths: [],
        buildSpecification: "",
        runtimeSpecification: "",
        deploymentRetention: 0,
        scopes: []
    ) {
        _id
        _createdAt
        _updatedAt
        name
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
```
