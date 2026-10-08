```graphql
mutation {
    postgresqlUpdatePooler(
        databaseId: "<DATABASE_ID>",
        mode: "transaction",
        maxConnections: 10,
        defaultPoolSize: 1,
        readWriteSplitting: false,
        poolerCpuRequest: "<POOLER_CPU_REQUEST>",
        poolerCpuLimit: "<POOLER_CPU_LIMIT>",
        poolerMemoryRequest: "<POOLER_MEMORY_REQUEST>",
        poolerMemoryLimit: "<POOLER_MEMORY_LIMIT>"
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
