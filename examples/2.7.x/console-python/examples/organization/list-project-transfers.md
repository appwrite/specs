```python
from appwrite_console.client import Client
from appwrite_console.services.organization import Organization
from appwrite_console.models import TransferList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organization = Organization(client)

result: TransferList = organization.list_project_transfers(
    project_id = '<PROJECT_ID>', # optional
    queries = [], # optional
    total = False # optional
)

print(result.model_dump())
```
