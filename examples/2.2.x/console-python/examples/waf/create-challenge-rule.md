```python
from appwrite_console.client import Client
from appwrite_console.services.waf import Waf
from appwrite_console.models import WafRuleChallenge

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

waf = Waf(client)

result: WafRuleChallenge = waf.create_challenge_rule(
    rule_id = '<RULE_ID>',
    resource_type = 'api',
    name = '<NAME>',
    resource_id = '<RESOURCE_ID>', # optional
    description = '<DESCRIPTION>', # optional
    challenge_type = 'compute', # optional
    priority = -100000, # optional
    enabled = False, # optional
    conditions = '', # optional
    difficulty = 1, # optional
    ttl = 900 # optional
)

print(result.model_dump())
```
