```graphql
mutation {
    analyticsCreateEvent(
        propertyId: "<PROPERTY_ID>",
        name: "<NAME>",
        url: "https://example.com",
        domain: "<DOMAIN>",
        referrer: "<REFERRER>",
        screenWidth: 0,
        sessionHash: "<SESSION_HASH>",
        scrollDepth: 0,
        engagementTime: 0,
        props: [],
        userId: "<USER_ID>",
        ip: "<IP>",
        userAgent: "<USER_AGENT>"
    ) {
        status
    }
}
```
