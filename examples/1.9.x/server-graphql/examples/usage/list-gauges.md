```graphql
query {
    usageListGauges(
        queries: [],
        total: false
    ) {
        total
        gauges {
            metric
            value
            time
            resourceType
            resourceId
        }
    }
}
```
