```graphql
query {
    teamsList(
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        teams {
            _id
            _createdAt
            _updatedAt
            name
            total
            prefs {
                data
            }
        }
    }
}
```
