```python
from appwrite_console.client import Client
from appwrite_console.services.users import Users
from appwrite_console.models import IdentityList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

users = Users(client)

result: IdentityList = users.list_identities(
    queries = [], # optional
    search = '<SEARCH>', # optional
    total = False # optional
)

print(result.model_dump())
```
