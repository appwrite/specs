```http
POST /v1/tablesdb/{databaseId}/tables/{tableId}/columns/relationship HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "relatedTableId": "<RELATED_TABLE_ID>",
  "type": "oneToOne",
  "twoWay": false,
  "key": "<KEY>",
  "twoWayKey": "<TWO_WAY_KEY>",
  "onDelete": "cascade"
}
```
