```graphql
mutation {
    organizationsEstimationDeleteOrganization(
        organizationId: "<ORGANIZATION_ID>"
    ) {
        unpaidInvoices {
            _id
            _createdAt
            _updatedAt
            _permissions
            teamId
            aggregationId
            plan
            usage {
                name
                value
                amount
                rate
                desc
                resourceId
            }
            amount
            tax
            taxAmount
            vat
            vatAmount
            grossAmount
            creditsUsed
            currency
            clientSecret
            status
            lastError
            dueAt
            from
            to
        }
    }
}
```
