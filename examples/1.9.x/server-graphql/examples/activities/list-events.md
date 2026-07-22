```graphql
query {
    activitiesListEvents(
        queries: ""
    ) {
        total
        events {
            _id
            actorType
            actorId
            actorEmail
            actorName
            resourceParent
            resourceType
            resourceId
            resource
            event
            userAgent
            ip
            mode
            country
            continentCode
            city
            subdivisions
            isp
            autonomousSystemNumber
            autonomousSystemOrganization
            connectionType
            connectionUsageType
            connectionOrganization
            time
            projectId
            teamId
            hostname
            sdk
            sdkVersion
        }
    }
}
```
