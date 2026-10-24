```http
POST /v1/migrations/nhost HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.6.2
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "resources": ["user"],
  "subdomain": "<SUBDOMAIN>",
  "region": "<REGION>",
  "adminSecret": "<ADMIN_SECRET>",
  "database": "<DATABASE>",
  "username": "<USERNAME>",
  "password": "password",
  "port": 5432
}
```
