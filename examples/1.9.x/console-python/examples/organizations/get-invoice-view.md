```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import PaymentMethod

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: bytes = organizations.get_invoice_view(
    organization_id = '<ORGANIZATION_ID>',
    invoice_id = '<INVOICE_ID>'
)

print(result.model_dump())
```
