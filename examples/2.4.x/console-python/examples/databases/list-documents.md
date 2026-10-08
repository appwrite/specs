```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import DocumentList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: DocumentList = databases.list_documents(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    queries = [], # optional
    transaction_id = '<TRANSACTION_ID>', # optional
    total = False, # optional
    ttl = 0 # optional
)

print(result.model_dump())
```
