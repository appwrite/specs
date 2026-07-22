```graphql
query {
    tablesDBGetReplicas(
        databaseId: "<DATABASE_ID>"
    ) {
        replicas
        syncMode
        members {
            _id
            role
            status
            lagSeconds
        }
    }
}
```
