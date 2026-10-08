```graphql
mutation {
    vectorsDBCreateOperations(
        transactionId: "<TRANSACTION_ID>",
        operations: [
	    {
	        "action": "create",
	        "databaseId": "<DATABASE_ID>",
	        "collectionId": "<COLLECTION_ID>",
	        "documentId": "<DOCUMENT_ID>",
	        "data": {
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
	    }
	]
    ) {
        _id
        _createdAt
        _updatedAt
        status
        operations
        expiresAt
    }
}
```
