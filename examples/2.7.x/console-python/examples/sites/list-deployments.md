```python
from appwrite_console.client import Client
from appwrite_console.services.sites import Sites
from appwrite_console.models import DeploymentList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

sites = Sites(client)

result: DeploymentList = sites.list_deployments(
    site_id = '<SITE_ID>',
    queries = [], # optional
    search = '<SEARCH>', # optional
    total = False # optional
)

print(result.model_dump())
```
