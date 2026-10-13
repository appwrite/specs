```python
from appwrite_console.client import Client
from appwrite_console.services.domains import Domains
from appwrite_console.models import DomainPurchase

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

domains = Domains(client)

result: DomainPurchase = domains.update_purchase(
    invoice_id = '<INVOICE_ID>',
    organization_id = '<ORGANIZATION_ID>'
)

print(result.model_dump())
```
