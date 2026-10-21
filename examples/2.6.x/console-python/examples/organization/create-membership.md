```python
from appwrite_console.client import Client
from appwrite_console.services.organization import Organization
from appwrite_console.models import Membership

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organization = Organization(client)

result: Membership = organization.create_membership(
    roles = [],
    email = 'email@example.com', # optional
    user_id = '<USER_ID>', # optional
    phone = '+12065550100', # optional
    url = 'https://example.com', # optional
    name = '<NAME>' # optional
)

print(result.model_dump())
```
