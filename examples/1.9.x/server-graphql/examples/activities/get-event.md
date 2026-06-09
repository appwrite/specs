```graphql
query {
    activitiesGetEvent(
        eventId: "<EVENT_ID>"
    ) {
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
        time
        projectId
        teamId
        hostname
        countryCode
        countryName
    }
}
```
