```graphql
query {
    usageListEvents(
        queries: [],
        total: false
    ) {
        total
        events {
            metric
            value
            time
            path
            method
            status
            resourceType
            resourceId
            countryCode
            userAgent
        }
    }
}
```
