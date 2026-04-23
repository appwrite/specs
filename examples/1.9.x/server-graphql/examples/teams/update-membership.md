```graphql
mutation {
    teamsUpdateMembership(
        teamId: "<TEAM_ID>",
        membershipId: "<MEMBERSHIP_ID>",
        roles: []
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
        roles
    }
}
```
