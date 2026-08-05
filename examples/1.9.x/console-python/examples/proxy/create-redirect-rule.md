```python
from appwrite_console.client import Client
from appwrite_console.services.proxy import Proxy
from appwrite_console.models import ProxyRule
from appwrite_console.enums import StatusCode
from appwrite_console.enums import ProxyResourceType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

proxy = Proxy(client)

result: ProxyRule = proxy.create_redirect_rule(
    domain = '',
    url = 'https://example.com',
    status_code = StatusCode.MOVEDPERMANENTLY,
    resource_id = '<RESOURCE_ID>',
    resource_type = ProxyResourceType.SITE
)

print(result.model_dump())
```
