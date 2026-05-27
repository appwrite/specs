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

response, error := service.UpdateOAuth2Spotify(
    project.WithUpdateOAuth2SpotifyClientId("<CLIENT_ID>"),
    project.WithUpdateOAuth2SpotifyClientSecret("<CLIENT_SECRET>"),
    project.WithUpdateOAuth2SpotifyEnabled(false),
)
```
