```graphql
query {
    postgresqlGetStatus(
        databaseId: "<DATABASE_ID>"
    ) {
        health
        ready
        engine
        version
        uptime
        connections {
            current
            max
        }
        syncMode
        effectiveSyncMode
        syncDegraded
        syncAcknowledgements
        syncStandbyCount
        syncStateConfirmed
        replicas {
            index
            role
            healthy
            replicating
            lagSeconds
        }
        volumes {
            path
            usedPercent
            available
            mounted
        }
    }
}
```
