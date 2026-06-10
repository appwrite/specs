```graphql
query {
    sitesListLogs(
        siteId: "<SITE_ID>",
        queries: [],
        total: false
    ) {
        total
        executions {
            _id
            _createdAt
            _updatedAt
            _permissions
            functionId
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
}
```
