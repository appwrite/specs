```graphql
mutation {
    accountUpdatePaymentMethodProvider(
        paymentMethodId: "<PAYMENT_METHOD_ID>",
        providerMethodId: "<PROVIDER_METHOD_ID>",
        name: "<NAME>",
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
