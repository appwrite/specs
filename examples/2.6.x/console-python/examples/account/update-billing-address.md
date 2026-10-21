```python
from appwrite_console.client import Client
from appwrite_console.services.account import Account
from appwrite_console.models import BillingAddress

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

account = Account(client)

result: BillingAddress = account.update_billing_address(
    billing_address_id = '<BILLING_ADDRESS_ID>',
    country = '<COUNTRY>',
    city = '<CITY>',
    street_address = '<STREET_ADDRESS>',
    address_line2 = '<ADDRESS_LINE2>', # optional
    state = '<STATE>', # optional
    postal_code = '<POSTAL_CODE>' # optional
)

print(result.model_dump())
```
