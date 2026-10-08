```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import AddonList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: AddonList = organizations.list_addons(
    organization_id = '<ORGANIZATION_ID>'
)

print(result.model_dump())
```
