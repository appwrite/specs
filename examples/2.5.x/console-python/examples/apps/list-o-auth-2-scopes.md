```python
from appwrite_console.client import Client
from appwrite_console.services.apps import Apps
from appwrite_console.models import AppScopeList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

apps = Apps(client)

result: AppScopeList = apps.list_o_auth2_scopes()

print(result.model_dump())
```
