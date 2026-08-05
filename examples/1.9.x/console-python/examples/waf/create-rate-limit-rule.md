```python
from appwrite_console.client import Client
from appwrite_console.services.waf import Waf
from appwrite_console.models import WafRuleRateLimit

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

waf = Waf(client)

result: WafRuleRateLimit = waf.create_rate_limit_rule(
    rule_id = '<RULE_ID>',
    resource_type = 'api',
    name = '<NAME>',
    limit = 1,
    interval = 1,
    resource_id = '<RESOURCE_ID>', # optional
    description = '<DESCRIPTION>', # optional
    key = 'ip', # optional
    priority = -100000, # optional
    enabled = False, # optional
    conditions = '' # optional
)

print(result.model_dump())
```
