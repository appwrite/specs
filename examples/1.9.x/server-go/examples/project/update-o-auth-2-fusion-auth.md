```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/project"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := project.New(client)

response, error := service.UpdateOAuth2FusionAuth(
    project.WithUpdateOAuth2FusionAuthClientId("<CLIENT_ID>"),
    project.WithUpdateOAuth2FusionAuthClientSecret("<CLIENT_SECRET>"),
    project.WithUpdateOAuth2FusionAuthEndpoint("<ENDPOINT>"),
    project.WithUpdateOAuth2FusionAuthEnabled(false),
)
```
