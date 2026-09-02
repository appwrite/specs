```http
POST /v1/tablesdb/{databaseId}/migrations HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "specification": "s-1vcpu-1gb",
  "autoCutover": false
}
```
