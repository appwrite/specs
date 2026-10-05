```graphql
mutation {
    projectUpdateOAuth2Microsoft(
        applicationId: "<APPLICATION_ID>",
        applicationSecret: "<APPLICATION_SECRET>",
        tenant: "<TENANT>",
        prompt: [],
        enabled: false
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
