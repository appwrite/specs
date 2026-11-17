```http
PATCH /v1/project/ldap HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.7.2
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "enabled": false,
  "hosts": ["ldap.example.com"],
  "port": 636,
  "encryption": "none",
  "verification": false,
  "certificate": "<CERTIFICATE>",
  "timeout": 10,
  "baseDn": "ou=people,dc=example,dc=com",
  "bindDn": "cn=appwrite,ou=services,dc=example,dc=com",
  "bindPassword": "password",
  "userFilter": "(uid={username})",
  "requiredGroupDn": "cn=staff,ou=groups,dc=example,dc=com",
  "idAttribute": "entryUUID",
  "emailAttribute": "mail",
  "nameAttribute": "cn",
  "phoneAttribute": "mobile"
}
```
