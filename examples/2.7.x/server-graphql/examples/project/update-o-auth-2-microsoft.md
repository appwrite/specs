```graphql
mutation {
    projectUpdateOAuth2Microsoft(
        applicationId: "<APPLICATION_ID>",
        applicationSecret: "<APPLICATION_SECRET>",
        tenant: "<TENANT>",
        enabled: false,
        prompt: []
    ) {
        _id
        enabled
        applicationId
        applicationSecret
        prompt
        tenant
    }
}
```
