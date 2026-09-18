```graphql
mutation {
    postgresqlCreateExecution(
        databaseId: "<DATABASE_ID>",
        sql: "<SQL>",
        bindings: "{}",
        timeoutSeconds: 1
    ) {
        rows
        rowCount
        columns {
            name
            type
        }
        durationMs
        truncated
        bytes
    }
}
```
