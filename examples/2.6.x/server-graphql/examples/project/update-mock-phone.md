```graphql
mutation {
    projectUpdateMockPhone(
        number: "+12065550100",
        otp: "<OTP>"
    ) {
        number
        otp
        _createdAt
        _updatedAt
    }
}
```
