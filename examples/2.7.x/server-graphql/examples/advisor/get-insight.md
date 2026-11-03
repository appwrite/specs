```graphql
query {
    advisorGetInsight(
        reportId: "<REPORT_ID>",
        insightId: "<INSIGHT_ID>"
    ) {
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
```
