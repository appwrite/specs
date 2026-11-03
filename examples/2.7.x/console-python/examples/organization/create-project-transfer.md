```python
from appwrite_console.client import Client
from appwrite_console.services.organization import Organization
from appwrite_console.models import Transfer

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organization = Organization(client)

result: Transfer = organization.create_project_transfer(
    project_id = '<PROJECT_ID>',
    recipient_id = '<RECIPIENT_ID>', # optional
    expire = '2020-10-15T06:38:00.000+00:00' # optional
)

print(result.model_dump())
```
