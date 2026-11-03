```python
from appwrite_console.client import Client
from appwrite_console.services.organization import Organization
from appwrite_console.models import Transfer

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organization = Organization(client)

result: Transfer = organization.get_project_transfer(
    transfer_id = '<TRANSFER_ID>',
    secret = '<SECRET>' # optional
)

print(result.model_dump())
```
