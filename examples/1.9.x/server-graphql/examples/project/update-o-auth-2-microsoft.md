```graphql
mutation {
    projectUpdateOAuth2Microsoft(
        applicationId: "<APPLICATION_ID>",
        applicationSecret: "<APPLICATION_SECRET>",
        tenant: "<TENANT>",
        enabled: false
    ) {
        _id
        enabled
        applicationId
        applicationSecret
        tenant
    }
}
```
