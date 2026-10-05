```graphql
mutation {
    analyticsCreateProperty(
        propertyId: "<PROPERTY_ID>",
        name: "<NAME>",
        domain: "<DOMAIN>",
        timezone: "<TIMEZONE>",
        enabled: false,
        public: false,
        allowedOrigins: []
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
