```python
from appwrite_console.client import Client
from appwrite_console.services.organization import Organization
from appwrite_console.models import Key
from appwrite_console.enums import OrganizationKeyScopes

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organization = Organization(client)

result: Key = organization.create_key(
    key_id = '<KEY_ID>',
    name = '<NAME>',
    scopes = [OrganizationKeyScopes.PROJECTS_READ],
    expire = '2020-10-15T06:38:00.000+00:00' # optional
)

print(result.model_dump())
```
