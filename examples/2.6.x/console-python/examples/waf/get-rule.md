```python
from appwrite_console.client import Client
from appwrite_console.services.waf import Waf
from appwrite_console.models import WafRuleBypass
from appwrite_console.models import WafRuleDeny
from appwrite_console.models import WafRuleChallenge
from appwrite_console.models import WafRuleRateLimit
from appwrite_console.models import WafRuleRedirect
from typing import Union

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

waf = Waf(client)

result: Union[WafRuleBypass, WafRuleDeny, WafRuleChallenge, WafRuleRateLimit, WafRuleRedirect] = waf.get_rule(
    rule_id = '<RULE_ID>'
)

print(result.model_dump())
```
