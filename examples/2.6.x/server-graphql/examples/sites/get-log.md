```graphql
query {
    sitesGetLog(
        siteId: "<SITE_ID>",
        logId: "<LOG_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        resourceId
        resourceType
        deploymentId
        trigger
        status
        requestMethod
        requestPath
        requestHeaders {
            name
            value
        }
        responseStatusCode
        responseBody
        responseHeaders {
            name
            value
        }
        logs
        errors
        duration
        scheduledAt
    }
}
```
