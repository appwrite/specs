```python
from appwrite_console.client import Client
from appwrite_console.services.vectors_db import VectorsDB
from appwrite_console.models import DedicatedDatabase

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vectors_db = VectorsDB(client)

result: DedicatedDatabase = vectors_db.create_failover(
    database_id = '<DATABASE_ID>',
    target_replica_id = '<TARGET_REPLICA_ID>' # optional
)

print(result.model_dump())
```
