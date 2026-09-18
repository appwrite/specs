```python
from appwrite_console.client import Client
from appwrite_console.services.organization import Organization

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organization = Organization(client)

result = organization.delete_membership(
    membership_id = '<MEMBERSHIP_ID>'
)
```
