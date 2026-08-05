```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import Organization
from appwrite_console.models import PaymentAuthentication
from typing import Union
from appwrite_console.enums import Platform

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: Union[Organization, PaymentAuthentication] = organizations.create(
    organization_id = '<ORGANIZATION_ID>',
    name = '<NAME>',
    billing_plan = 'tier-0',
    payment_method_id = '<PAYMENT_METHOD_ID>', # optional
    billing_address_id = '<BILLING_ADDRESS_ID>', # optional
    invites = [], # optional
    coupon_id = '<COUPON_ID>', # optional
    tax_id = '<TAX_ID>', # optional
    budget = 0, # optional
    platform = Platform.APPWRITE # optional
)

print(result.model_dump())
```
