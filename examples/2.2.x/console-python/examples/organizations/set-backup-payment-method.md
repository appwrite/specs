```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import Organization

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: Organization = organizations.set_backup_payment_method(
    organization_id = '<ORGANIZATION_ID>',
    payment_method_id = '<PAYMENT_METHOD_ID>'
)

print(result.model_dump())
```
