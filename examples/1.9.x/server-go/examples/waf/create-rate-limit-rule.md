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

response, error := service.CreateRateLimitRule(
    "<RULE_ID>",
    "api",
    "<NAME>",
    1,
    1,
    waf.WithCreateRateLimitRuleResourceId("<RESOURCE_ID>"),
    waf.WithCreateRateLimitRuleDescription("<DESCRIPTION>"),
    waf.WithCreateRateLimitRulePriority(-100000),
    waf.WithCreateRateLimitRuleEnabled(false),
    waf.WithCreateRateLimitRuleConditions(""),
)
```
