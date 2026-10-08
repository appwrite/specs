```python
from appwrite_console.client import Client
from appwrite_console.services.waf import Waf
from appwrite_console.models import WafRuleList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

waf = Waf(client)

result: WafRuleList = waf.list_rules(
    queries = [], # optional
    search = '<SEARCH>', # optional
    total = False # optional
)

print(result.model_dump())
```
