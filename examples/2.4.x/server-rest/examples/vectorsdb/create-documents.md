```http
POST /v1/vectorsdb/{databaseId}/collections/{collectionId}/documents HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.4.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "documents": [
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
  "transactionId": "<TRANSACTION_ID>"
}
```
