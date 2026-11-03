```graphql
mutation {
    vectorsDBCreateDocuments(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        documents: [
	    {
	        "$id": "example1",
	        "embeddings": [
	            0.12,
	            -0.55,
	            0.88,
	            1.02
	        ],
	        "metadata": {
	            "name": "First document"
	        }
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
