```python
from appwrite_console.client import Client
from appwrite_console.services.domains import Domains
from appwrite_console.models import DomainPurchase

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

domains = Domains(client)

result: DomainPurchase = domains.create_transfer_in(
    domain = 'example.com',
    organization_id = '<ORGANIZATION_ID>',
    auth_code = '<AUTH_CODE>',
    payment_method_id = '<PAYMENT_METHOD_ID>',
    auto_renewal = False # optional
)

print(result.model_dump())
```
