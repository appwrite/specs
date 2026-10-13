```graphql
mutation {
    databasesUpsertDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        documents: [
	    {
	        "$id": "example1",
	        "username": "walter.obrien",
	        "email": "walter.obrien@example.com",
	        "fullName": "Walter O'Brien",
	        "age": 30,
	        "isAdmin": false
	    }
	],
        transactionId: "<TRANSACTION_ID>"
    ) {
        total
        documents {
            _id
            _sequence
            _collectionId
            _databaseId
            _createdAt
            _updatedAt
            _permissions
            data
        }
    }
}
```
