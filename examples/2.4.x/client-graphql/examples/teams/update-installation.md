```graphql
mutation {
    teamsUpdateInstallation(
        teamId: "<TEAM_ID>",
        installationId: "<INSTALLATION_ID>",
        authorizationDetails: "<AUTHORIZATION_DETAILS>"
    ) {
        _id
        _createdAt
        _updatedAt
        appId
        teamId
        scopes
        authorizationDetails
        createdById
        createdByName
        lastAccessedAt
    }
}
```
