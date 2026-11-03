```graphql
query {
    organizationGetInstallation(
        installationId: "<INSTALLATION_ID>"
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
