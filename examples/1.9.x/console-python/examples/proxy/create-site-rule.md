```python
from appwrite_console.client import Client
from appwrite_console.services.proxy import Proxy
from appwrite_console.models import ProxyRule

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

proxy = Proxy(client)

result: ProxyRule = proxy.create_site_rule(
    domain = '',
    site_id = '<SITE_ID>',
    branch = '<BRANCH>' # optional
)

print(result.model_dump())
```
