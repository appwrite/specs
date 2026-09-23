```python
from appwrite_console.client import Client
from appwrite_console.services.domains import Domains
from appwrite_console.models import DomainPurchase

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

domains = Domains(client)

result: DomainPurchase = domains.create_purchase(
    domain = 'example.com',
    organization_id = '<ORGANIZATION_ID>',
    first_name = '<FIRST_NAME>',
    last_name = '<LAST_NAME>',
    email = 'email@example.com',
    phone = '+12065550100',
    billing_address_id = '<BILLING_ADDRESS_ID>',
    payment_method_id = '<PAYMENT_METHOD_ID>',
    address_line3 = '<ADDRESS_LINE3>', # optional
    company_name = '<COMPANY_NAME>', # optional
    period_years = 1, # optional
    auto_renewal = False # optional
)

print(result.model_dump())
```
