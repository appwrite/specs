```graphql
mutation {
    analyticsCreateProperty(
        propertyId: "<PROPERTY_ID>",
        name: "<NAME>",
        domain: "<DOMAIN>",
        enabled: false,
        public: false,
        allowedOrigins: []
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
