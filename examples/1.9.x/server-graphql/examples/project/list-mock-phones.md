```graphql
query {
    projectListMockPhones(
        queries: [],
        total: false
    ) {
        total
        mockNumbers {
            number
            otp
            _createdAt
            _updatedAt
        }
    }
}
```
