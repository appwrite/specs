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
        timezone
        enabled
        public
        allowedOrigins
        snippetId
    }
}
```
