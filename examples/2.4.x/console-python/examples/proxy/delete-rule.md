```python
from appwrite_console.client import Client
from appwrite_console.services.proxy import Proxy

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

proxy = Proxy(client)

result = proxy.delete_rule(
    rule_id = '<RULE_ID>'
)
```
