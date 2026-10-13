```graphql
mutation {
    postgresqlDeleteBackupPolicy(
        databaseId: "<DATABASE_ID>",
        policyId: "<POLICY_ID>"
    ) {
        status
    }
}
```
