```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result = organizations.delete_billing_address(
    organization_id = '<ORGANIZATION_ID>'
)
```
