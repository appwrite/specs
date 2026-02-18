```graphql
mutation {
    accountUpdatePaymentMethodMandateOptions(
        paymentMethodId: "<PAYMENT_METHOD_ID>"
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
