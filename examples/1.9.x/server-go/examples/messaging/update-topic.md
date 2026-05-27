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

response, error := service.UpdateTopic(
    "<TOPIC_ID>",
    messaging.WithUpdateTopicName("<NAME>"),
    messaging.WithUpdateTopicSubscribe(interface{}{"any"}),
)
```
