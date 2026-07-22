```graphql
query {
    usageListGauges(
        metrics: [],
        queries: [],
        interval: "1m",
        dimensions: [],
        startAt: "2020-10-15T06:38:00.000+00:00",
        endAt: "2020-10-15T06:38:00.000+00:00",
        orderBy: "time",
        orderDir: "asc",
        limit: 1,
        offset: 0
    ) {
        interval
        metrics {
            metric
            points {
                time
                value
                path
                method
                status
                service
                country
                region
                hostname
                ip
                osName
                clientType
                clientName
                deviceName
                teamId
                resourceId
                resourceType
            }
        }
    }
}
```
