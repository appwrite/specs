```http
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/relationship HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "relatedCollectionId": "<RELATED_COLLECTION_ID>",
  "type": "oneToOne",
  "twoWay": false,
  "key": "",
  "twoWayKey": "",
  "onDelete": "cascade"
}

{
  "relatedCollectionId": "<RELATED_COLLECTION_ID>",
  "type": "oneToOne",
  "twoWay": false,
  "key": "",
  "twoWayKey": "",
  "onDelete": "cascade"
}
```
