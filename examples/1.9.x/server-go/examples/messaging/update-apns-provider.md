```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/messaging"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := messaging.New(client)

response, error := service.UpdateAPNSProvider(
    "<PROVIDER_ID>",
    messaging.WithUpdateAPNSProviderName("<NAME>"),
    messaging.WithUpdateAPNSProviderEnabled(false),
    messaging.WithUpdateAPNSProviderAuthKey("<AUTH_KEY>"),
    messaging.WithUpdateAPNSProviderAuthKeyId("<AUTH_KEY_ID>"),
    messaging.WithUpdateAPNSProviderTeamId("<TEAM_ID>"),
    messaging.WithUpdateAPNSProviderBundleId("<BUNDLE_ID>"),
    messaging.WithUpdateAPNSProviderSandbox(false),
)
```
