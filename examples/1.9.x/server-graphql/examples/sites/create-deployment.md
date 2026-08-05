```graphql
POST /v1/sites/{siteId}/deployments HTTP/1.1
Host: cloud.appwrite.io
Content-Type: multipart/form-data; boundary="cec8e8123c05ba25"
Accept: application/json
X-Appwrite-Response-Format: 1.9.6
X-Appwrite-Project: <YOUR_PROJECT_ID>
Content-Length: *Length of your entity body in bytes*

--cec8e8123c05ba25
Content-Disposition: form-data; name="operations"

{ "query": "mutation { sitesCreateDeployment(siteId: $siteId, code: $code, installCommand: $installCommand, buildCommand: $buildCommand, outputDirectory: $outputDirectory, activate: $activate) { id }" }, "variables": { "siteId": "<SITE_ID>", "code": null, "installCommand": "<INSTALL_COMMAND>", "buildCommand": "<BUILD_COMMAND>", "outputDirectory": "<OUTPUT_DIRECTORY>", "activate": false } }

--cec8e8123c05ba25
Content-Disposition: form-data; name="map"

{ "0": ["variables.code"],  }

--cec8e8123c05ba25
Content-Disposition: form-data; name="0"; filename="code.ext"

File contents

--cec8e8123c05ba25--
mutation {
    sitesCreateDeployment(
        siteId: "<SITE_ID>",
        code: null,
        installCommand: "<INSTALL_COMMAND>",
        buildCommand: "<BUILD_COMMAND>",
        outputDirectory: "<OUTPUT_DIRECTORY>",
        activate: false
    ) {
        _id
        _createdAt
        _updatedAt
        type
        resourceId
        resourceType
        entrypoint
        sourceSize
        buildSize
        totalSize
        buildId
        activate
        screenshotLight
        screenshotDark
        status
        buildLogs
        buildDuration
        providerRepositoryName
        providerRepositoryOwner
        providerRepositoryUrl
        providerCommitHash
        providerCommitAuthorUrl
        providerCommitAuthor
        providerCommitMessage
        providerCommitUrl
        providerBranch
        providerBranchUrl
    }
}
```
