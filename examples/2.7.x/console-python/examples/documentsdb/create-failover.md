```python
from appwrite_console.client import Client
from appwrite_console.services.documents_db import DocumentsDB
from appwrite_console.models import DedicatedDatabase

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

documents_db = DocumentsDB(client)

result: DedicatedDatabase = documents_db.create_failover(
    database_id = '<DATABASE_ID>',
    target_replica_id = '<TARGET_REPLICA_ID>' # optional
)

print(result.model_dump())
```
