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

response, error := service.UpdateOAuth2Apple(
    project.WithUpdateOAuth2AppleServiceId("<SERVICE_ID>"),
    project.WithUpdateOAuth2AppleKeyId("<KEY_ID>"),
    project.WithUpdateOAuth2AppleTeamId("<TEAM_ID>"),
    project.WithUpdateOAuth2AppleP8File("<P8_FILE>"),
    project.WithUpdateOAuth2AppleEnabled(false),
)
```
