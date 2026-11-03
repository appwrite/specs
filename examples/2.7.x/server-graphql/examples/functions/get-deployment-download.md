```graphql
query {
    functionsGetDeploymentDownload(
        functionId: "<FUNCTION_ID>",
        deploymentId: "<DEPLOYMENT_ID>",
        type: "source",
        token: "<TOKEN>"
    ) {
        status
    }
}
```
