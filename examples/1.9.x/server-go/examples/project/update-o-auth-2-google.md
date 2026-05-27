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

response, error := service.UpdateOAuth2Google(
    project.WithUpdateOAuth2GoogleClientId("<CLIENT_ID>"),
    project.WithUpdateOAuth2GoogleClientSecret("<CLIENT_SECRET>"),
    project.WithUpdateOAuth2GooglePrompt([]interface{}{}),
    project.WithUpdateOAuth2GoogleEnabled(false),
)
```
