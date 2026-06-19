```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v5/client"
    "github.com/appwrite/sdk-for-go/v5/usage"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := usage.New(client)

response, error := service.ListEvents(
    "<METRIC>",
    usage.WithListEventsResource("<RESOURCE>"),
    usage.WithListEventsResourceId("<RESOURCE_ID>"),
    usage.WithListEventsInterval("1m"),
    usage.WithListEventsDimensions([]string{}),
    usage.WithListEventsStartAt("2020-10-15T06:38:00.000+00:00"),
    usage.WithListEventsEndAt("2020-10-15T06:38:00.000+00:00"),
    usage.WithListEventsOrderBy("time"),
    usage.WithListEventsOrderDir("asc"),
    usage.WithListEventsLimit(1),
    usage.WithListEventsOffset(0),
)
```
