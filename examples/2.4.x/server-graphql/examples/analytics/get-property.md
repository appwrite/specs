```graphql
query {
    analyticsGetProperty(
        propertyId: "<PROPERTY_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        domain
        enabled
        public
        allowedOrigins
        accessedAt
        firstAccessedAt
    }
}
```
