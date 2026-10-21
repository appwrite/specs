```graphql
query {
    accountListMemberships(
        queries: [],
        total: false
    ) {
        total
        memberships {
            _id
            _createdAt
            _updatedAt
            userId
            userName
            userEmail
            userPhone
            teamId
            teamName
            invited
            joined
            confirm
            mfa
            userAccessedAt
            roles
        }
    }
}
```
