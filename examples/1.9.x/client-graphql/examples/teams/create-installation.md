```graphql
mutation {
    teamsCreateInstallation(
        teamId: "<TEAM_ID>",
        appId: "<APP_ID>",
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
mutation {
    teamsCreateInstallation(
        teamId: "<TEAM_ID>",
        appId: "<APP_ID>",
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
