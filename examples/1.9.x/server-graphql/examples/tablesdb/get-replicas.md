```graphql
query {
    tablesDBGetReplicas(
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
            lagSeconds
        }
    }
}
```
