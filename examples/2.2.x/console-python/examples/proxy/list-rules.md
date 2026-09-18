```python
from appwrite_console.client import Client
from appwrite_console.services.proxy import Proxy
from appwrite_console.models import ProxyRuleList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

proxy = Proxy(client)

result: ProxyRuleList = proxy.list_rules(
    queries = [], # optional
    total = False # optional
)

print(result.model_dump())
```
