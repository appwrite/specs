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

response, error := service.ListGauges(
    []string{},
    usage.WithListGaugesQueries([]string{}),
    usage.WithListGaugesInterval("1m"),
    usage.WithListGaugesDimensions([]string{}),
    usage.WithListGaugesStartAt("2020-10-15T06:38:00.000+00:00"),
    usage.WithListGaugesEndAt("2020-10-15T06:38:00.000+00:00"),
    usage.WithListGaugesOrderBy("time"),
    usage.WithListGaugesOrderDir("asc"),
    usage.WithListGaugesLimit(1),
    usage.WithListGaugesOffset(0),
)
```
