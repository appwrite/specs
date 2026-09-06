```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import Credit

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: Credit = organizations.get_credit(
    organization_id = '<ORGANIZATION_ID>',
    credit_id = '<CREDIT_ID>'
)

print(result.model_dump())
```
