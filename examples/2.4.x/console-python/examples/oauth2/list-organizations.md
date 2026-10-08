```python
from appwrite_console.client import Client
from appwrite_console.services.oauth2 import Oauth2
from appwrite_console.models import Oauth2OrganizationList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

oauth2 = Oauth2(client)

result: Oauth2OrganizationList = oauth2.list_organizations(
    limit = 1, # optional
    offset = 0, # optional
    search = '<SEARCH>' # optional
)

print(result.model_dump())
```
