```http
PUT /v1/functions/{functionId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "runtime": "node-14.5",
  "execute": ["any"],
  "events": [],
  "schedule": "0 0 * * *",
  "timeout": 1,
  "enabled": false,
  "logging": false,
  "entrypoint": "<ENTRYPOINT>",
  "commands": "<COMMANDS>",
  "scopes": [],
  "installationId": "<INSTALLATION_ID>",
  "providerRepositoryId": "<PROVIDER_REPOSITORY_ID>",
  "providerBranch": "<PROVIDER_BRANCH>",
  "providerSilentMode": false,
  "providerRootDirectory": "<PROVIDER_ROOT_DIRECTORY>",
  "providerBranches": [],
  "providerPaths": [],
  "buildSpecification": "s-1vcpu-512mb",
  "runtimeSpecification": "s-1vcpu-512mb",
  "deploymentRetention": 0
}
```
