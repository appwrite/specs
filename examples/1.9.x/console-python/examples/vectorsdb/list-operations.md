```python
from appwrite_console.client import Client
from appwrite_console.services.vectors_db import VectorsDB
from appwrite_console.models import DedicatedDatabaseOperationList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vectors_db = VectorsDB(client)

result: DedicatedDatabaseOperationList = vectors_db.list_operations(
    database_id = '<DATABASE_ID>',
    status = 'running', # optional
    limit = 1, # optional
    offset = 0 # optional
)

print(result.model_dump())
```
