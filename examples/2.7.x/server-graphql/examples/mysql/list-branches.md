```graphql
query {
    mysqlListBranches(
        databaseId: "<DATABASE_ID>"
    ) {
        total
        branches {
            branchId
            branchName
            namespace
            expiresAt
            host
            port
            database
            username
            password
            ssl
            engine
            connectionString
        }
    }
}
```
