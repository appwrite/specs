```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import Organization

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: Organization = organizations.set_billing_tax_id(
    organization_id = '<ORGANIZATION_ID>',
    tax_id = '<TAX_ID>'
)

print(result.model_dump())
```
