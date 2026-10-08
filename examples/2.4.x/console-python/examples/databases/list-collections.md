```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import CollectionList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: CollectionList = databases.list_collections(
    database_id = '<DATABASE_ID>',
    queries = [], # optional
    search = '<SEARCH>', # optional
    total = False # optional
)

print(result.model_dump())
```
