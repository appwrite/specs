```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v6/client"
    "github.com/appwrite/sdk-for-go/v6/waf"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := waf.New(client)

response, error := service.CreateDenyRule(
    "<RULE_ID>",
    "api",
    "<NAME>",
    waf.WithCreateDenyRuleResourceId("<RESOURCE_ID>"),
    waf.WithCreateDenyRuleDescription("<DESCRIPTION>"),
    waf.WithCreateDenyRulePriority(-100000),
    waf.WithCreateDenyRuleEnabled(false),
    waf.WithCreateDenyRuleConditions(""),
)
```
