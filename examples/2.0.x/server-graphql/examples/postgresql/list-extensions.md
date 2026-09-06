```graphql
query {
    postgresqlListExtensions(
        databaseId: "<DATABASE_ID>"
    ) {
        installed
        available
        metadata {
            key
            name
            description
            category
        }
    }
}
```
