```python
from appwrite_console.client import Client
from appwrite_console.services.vectors_db import VectorsDB
from appwrite_console.models import IndexList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vectors_db = VectorsDB(client)

result: IndexList = vectors_db.list_indexes(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    queries = [], # optional
    total = False # optional
)

print(result.model_dump())
```
