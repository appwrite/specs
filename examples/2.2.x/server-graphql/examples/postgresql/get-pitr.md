```graphql
query {
    postgresqlGetPitr(
        databaseId: "<DATABASE_ID>"
    ) {
        earliest
        latest
    }
}
```
