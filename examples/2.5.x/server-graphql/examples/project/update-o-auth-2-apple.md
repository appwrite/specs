```graphql
mutation {
    projectUpdateOAuth2Apple(
        serviceId: "<SERVICE_ID>",
        keyId: "<KEY_ID>",
        teamId: "<TEAM_ID>",
        p8File: "<P8_FILE>",
        nativeClientIds: [],
        enabled: false,
        nativeEnabled: false
    ) {
        _id
        enabled
        serviceId
        keyId
        teamId
        p8File
        nativeEnabled
        nativeClientIds
    }
}
```
