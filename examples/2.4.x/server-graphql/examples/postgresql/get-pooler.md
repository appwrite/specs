```graphql
query {
    postgresqlGetPooler(
        databaseId: "<DATABASE_ID>"
    ) {
        enabled
        mode
        maxConnections
        defaultPoolSize
        port
        readWriteSplitting
        poolerCpuRequest
        poolerCpuLimit
        poolerMemoryRequest
        poolerMemoryLimit
    }
}
```
