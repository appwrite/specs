```graphql
mutation {
    accountCreateBillingAddress(
        country: "<COUNTRY>",
        city: "<CITY>",
        streetAddress: "<STREET_ADDRESS>",
        addressLine2: "<ADDRESS_LINE2>",
        state: "<STATE>",
        postalCode: "<POSTAL_CODE>"
    ) {
        _id
        userId
        streetAddress
        addressLine2
        country
        city
        state
        postalCode
    }
}
```
