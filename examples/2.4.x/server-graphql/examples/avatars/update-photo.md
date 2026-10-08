```graphql
PUT /v1/avatars/photo HTTP/1.1
Host: cloud.appwrite.io
Content-Type: multipart/form-data; boundary="cec8e8123c05ba25"
Accept: application/json
X-Appwrite-Response-Format: 2.4.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
Content-Length: *Length of your entity body in bytes*

--cec8e8123c05ba25
Content-Disposition: form-data; name="operations"

{ "query": "mutation { avatarsUpdatePhoto(file: $file) { id }" }, "variables": { "file": null } }

--cec8e8123c05ba25
Content-Disposition: form-data; name="map"

{ "0": ["variables.file"] }

--cec8e8123c05ba25
Content-Disposition: form-data; name="0"; filename="file.ext"

File contents

--cec8e8123c05ba25--
```
