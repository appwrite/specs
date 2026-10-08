```graphql
query {
    analyticsListMetrics(
        propertyId: "<PROPERTY_ID>",
        queries: [],
        interval: "1h",
        dimensions: [],
        dateRange: "<DATE_RANGE>",
        startAt: "2020-10-15T06:38:00.000+00:00",
        endAt: "2020-10-15T06:38:00.000+00:00",
        limit: 1
    ) {
        total
        metrics {
            value
            date
            visitors
            sessions
            pageviews
            events
            visits
            bounceRate
            visitDuration
            viewsPerVisit
            scrollDepth
            engagementTime
        }
    }
}
```
