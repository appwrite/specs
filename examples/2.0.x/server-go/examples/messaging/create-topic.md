```go
package main

import (
	"fmt"

	"github.com/appwrite/sdk-for-go/appwrite"
	"github.com/appwrite/sdk-for-go/messaging"
)

func main() {
	client := appwrite.NewClient(
		appwrite.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1"),
		appwrite.WithProject("<YOUR_PROJECT_ID>"),
		appwrite.WithKey("<YOUR_API_KEY>"),
	)

	service := messaging.New(client)

	response, err := service.CreateTopic(
		"<TOPIC_ID>",
		"<NAME>",
		service.WithCreateTopicSubscribe([]string{"any"}),
	)
	fmt.Println(response, err)
}
```
