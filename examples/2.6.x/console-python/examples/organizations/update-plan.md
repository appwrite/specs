```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import Organization

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: Organization = organizations.update_plan(
    organization_id = '<ORGANIZATION_ID>',
    billing_plan = 'tier-0',
    payment_method_id = '<PAYMENT_METHOD_ID>', # optional
    billing_address_id = '<BILLING_ADDRESS_ID>', # optional
    invites = [], # optional
    coupon_id = '<COUPON_ID>', # optional
    tax_id = '<TAX_ID>', # optional
    budget = 0 # optional
)

print(result.model_dump())
```
