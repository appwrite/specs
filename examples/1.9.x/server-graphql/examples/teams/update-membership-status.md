```graphql
mutation {
    teamsUpdateMembershipStatus(
        teamId: "<TEAM_ID>",
        membershipId: "<MEMBERSHIP_ID>",
        userId: "<USER_ID>",
        secret: "<SECRET>"
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
mutation {
    teamsUpdateMembershipStatus(
        teamId: "<TEAM_ID>",
        membershipId: "<MEMBERSHIP_ID>",
        userId: "<USER_ID>",
        secret: "<SECRET>"
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
