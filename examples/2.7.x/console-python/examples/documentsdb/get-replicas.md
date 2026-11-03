```python
from appwrite_console.client import Client
from appwrite_console.services.documents_db import DocumentsDB
from appwrite_console.models import DedicatedDatabaseReplicas

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

documents_db = DocumentsDB(client)

result: DedicatedDatabaseReplicas = documents_db.get_replicas(
    database_id = '<DATABASE_ID>'
)

print(result.model_dump())
```
