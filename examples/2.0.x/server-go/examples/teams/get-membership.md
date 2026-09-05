```go
package main

import (
	"fmt"

	"github.com/appwrite/sdk-for-go/appwrite"
	"github.com/appwrite/sdk-for-go/teams"
)

func main() {
	client := appwrite.NewClient(
		appwrite.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1"),
		appwrite.WithProject("<YOUR_PROJECT_ID>"),
		appwrite.WithSession(""),
	)

	service := teams.New(client)

	response, err := service.GetMembership(
		"<TEAM_ID>",
		"<MEMBERSHIP_ID>",
	)
	fmt.Println(response, err)
}
```
