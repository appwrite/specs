```graphql
query {
    tablesDBGetStatus(
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
        replicas {
            index
            role
            healthy
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
