```graphql
query {
    oauth2ListOrganizations(
        limit: 1,
        offset: 0,
        search: "<SEARCH>"
    ) {
        total
        organizations {
            _id
        }
    }
}
```
