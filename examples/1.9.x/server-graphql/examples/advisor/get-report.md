```graphql
query {
    advisorGetReport(
        reportId: "<REPORT_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        appId
        type
        title
        summary
        targetType
        target
        categories
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
        analyzedAt
    }
}
```
