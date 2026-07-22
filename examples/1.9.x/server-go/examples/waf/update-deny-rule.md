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

response, error := service.UpdateDenyRule(
    "<RULE_ID>",
    waf.WithUpdateDenyRuleResourceType("api"),
    waf.WithUpdateDenyRuleResourceId("<RESOURCE_ID>"),
    waf.WithUpdateDenyRuleName("<NAME>"),
    waf.WithUpdateDenyRuleDescription("<DESCRIPTION>"),
    waf.WithUpdateDenyRulePriority(-100000),
    waf.WithUpdateDenyRuleEnabled(false),
    waf.WithUpdateDenyRuleConditions(""),
)
```
