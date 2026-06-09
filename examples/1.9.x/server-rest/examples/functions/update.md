```http
PUT /v1/functions/{functionId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 1.9.5
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "runtime": "node-14.5",
  "execute": ["any"],
  "events": [],
  "schedule": "",
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
  "buildSpecification": "",
  "runtimeSpecification": "",
  "deploymentRetention": 0
}

{
  "name": "<NAME>",
  "runtime": "node-14.5",
  "execute": ["any"],
  "events": [],
  "schedule": "",
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
  "buildSpecification": "",
  "runtimeSpecification": "",
  "deploymentRetention": 0
}
```
