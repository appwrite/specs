```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result = databases.delete_index(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    key = ''
)
```
