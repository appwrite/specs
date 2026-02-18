```graphql
mutation {
    accountUpdatePaymentMethod(
        paymentMethodId: "<PAYMENT_METHOD_ID>",
        expiryMonth: 1,
        expiryYear: 2026,
        state: "<STATE>"
    ) {
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
