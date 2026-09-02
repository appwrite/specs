```http
PUT /v1/sites/{siteId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
Accept: application/json
X-Appwrite-Response-Format: 2.0.0
X-Appwrite-Project: <YOUR_PROJECT_ID>

{
  "name": "<NAME>",
  "framework": "analog",
  "enabled": false,
  "logging": false,
  "timeout": 1,
  "installCommand": "<INSTALL_COMMAND>",
  "buildCommand": "<BUILD_COMMAND>",
  "startCommand": "<START_COMMAND>",
  "outputDirectory": "<OUTPUT_DIRECTORY>",
  "buildRuntime": "node-14.5",
  "adapter": "static",
  "fallbackFile": "<FALLBACK_FILE>",
  "installationId": "<INSTALLATION_ID>",
  "providerRepositoryId": "<PROVIDER_REPOSITORY_ID>",
  "providerBranch": "<PROVIDER_BRANCH>",
  "providerSilentMode": false,
  "providerRootDirectory": "<PROVIDER_ROOT_DIRECTORY>",
  "providerBranches": [],
  "providerPaths": [],
  "buildSpecification": "s-1vcpu-512mb",
  "runtimeSpecification": "s-1vcpu-512mb",
  "deploymentRetention": 0,
  "scopes": []
}
```
