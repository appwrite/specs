```graphql
mutation {
    mongoCreate(
        databaseId: "<DATABASE_ID>",
        name: "<NAME>",
        version: "17",
        specification: "<SPECIFICATION>",
        replicas: 0,
        syncMode: "async",
        networkIdleTimeoutSeconds: 60,
        networkIPAllowlist: [],
        idleTimeoutMinutes: 5,
        pitr: false,
        pitrRetentionDays: 1,
        storageAutoscaling: false,
        storageAutoscalingThresholdPercent: 50,
        storageAutoscalingMaxGb: 0
    ) {
        _id
        _createdAt
        _updatedAt
        projectId
        name
        api
        engine
        version
        specification
        backend
        hostname
        connectionPort
        connectionUser
        connectionPassword
        credentialGeneration
        connectionString
        ssl
        status
        containerStatus
        lastAccessedAt
        idleUntil
        lifecycleState
        idleTimeoutMinutes
        cpu
        memory
        storage
        storageClass
        storageMaxGb
        nodePool
        replicas
        syncMode
        networkMaxConnections
        networkIdleTimeoutSeconds
        networkIPAllowlist
        backupEnabled
        pitr
        pitrRetentionDays
        storageAutoscaling
        storageAutoscalingThresholdPercent
        storageAutoscalingMaxGb
        maintenanceWindowDay
        maintenanceWindowHourUtc
        metricsEnabled
        sqlApiEnabled
        sqlApiAllowedStatements
        sqlApiMaxRows
        sqlApiMaxBytes
        sqlApiTimeoutSeconds
        error
    }
}
```
