```graphql
query {
    healthGetConsolePausing(
        threshold: 0,
        inactivityDays: 0
    ) {
        name
        ping
        status
    }
}
```
