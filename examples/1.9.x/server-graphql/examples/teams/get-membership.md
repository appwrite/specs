```graphql
query {
    teamsGetMembership(
        teamId: "<TEAM_ID>",
        membershipId: "<MEMBERSHIP_ID>"
    ) {
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
```
