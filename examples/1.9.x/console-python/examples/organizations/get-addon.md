```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import Addon

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: Addon = organizations.get_addon(
    organization_id = '<ORGANIZATION_ID>',
    addon_id = '<ADDON_ID>'
)

print(result.model_dump())
```
