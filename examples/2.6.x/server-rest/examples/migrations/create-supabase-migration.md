```http
POST /v1/migrations/supabase HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.6.2
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "resources": ["user"],
  "endpoint": "https://example.com",
  "apiKey": "<API_KEY>",
  "databaseHost": "<DATABASE_HOST>",
  "username": "<USERNAME>",
  "password": "password",
  "port": 5432
}
```
