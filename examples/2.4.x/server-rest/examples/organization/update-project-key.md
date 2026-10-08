```http
PUT /v1/organization/projects/{projectId}/keys/{keyId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.4.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "scopes": ["users.read"],
  "expire": "2020-10-15T06:38:00.000+00:00"
}
```
