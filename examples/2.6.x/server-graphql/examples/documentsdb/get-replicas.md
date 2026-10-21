```graphql
query {
    documentsDBGetReplicas(
        databaseId: "<DATABASE_ID>"
    ) {
        replicas
        syncMode
        effectiveSyncMode
        syncDegraded
        syncAcknowledgements
        syncStandbyCount
        syncStateConfirmed
        members {
            _id
            role
            status
            replicating
            lagSeconds
        }
    }
}
```
