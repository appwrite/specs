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

response, error := service.UpdateOAuth2Microsoft(
    project.WithUpdateOAuth2MicrosoftApplicationId("<APPLICATION_ID>"),
    project.WithUpdateOAuth2MicrosoftApplicationSecret("<APPLICATION_SECRET>"),
    project.WithUpdateOAuth2MicrosoftTenant("<TENANT>"),
    project.WithUpdateOAuth2MicrosoftEnabled(false),
)
```
