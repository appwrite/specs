```graphql
query {
    advisorListInsights(
        reportId: "<REPORT_ID>",
        queries: [],
        total: false
    ) {
        total
        insights {
            _id
            _createdAt
            _updatedAt
            reportId
            type
            severity
            status
            resourceType
            resourceId
            parentResourceType
            parentResourceId
            title
            summary
            ctas {
                label
                service
                method
                params
            }
            analyzedAt
            dismissedAt
            dismissedBy
        }
    }
}
```
