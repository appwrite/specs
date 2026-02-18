```graphql
mutation {
    accountCreatePaymentMethod {
        _id
        _createdAt
        _updatedAt
        _permissions
        providerMethodId
        clientSecret
        providerUserId
        userId
        expiryMonth
        expiryYear
        last4
        brand
        name
        mandateId
        country
        state
        lastError
        default
        expired
        failed
    }
}
```
