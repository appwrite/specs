```graphql
query {
    usersListIdentities(
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        identities {
            _id
            _createdAt
            _updatedAt
            userId
            provider
            providerUid
            providerEmail
            providerAccessToken
            providerAccessTokenExpiry
            providerRefreshToken
        }
    }
}
```
