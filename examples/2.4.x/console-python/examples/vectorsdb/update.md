```python
from appwrite_console.client import Client
from appwrite_console.services.vectors_db import VectorsDB
from appwrite_console.models import Database

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vectors_db = VectorsDB(client)

result: Database = vectors_db.update(
    database_id = '<DATABASE_ID>',
    name = '<NAME>',
    enabled = False, # optional
    specification = 'serverless', # optional
    replicas = 0, # optional
    sync_mode = 'async' # optional
)

print(result.model_dump())
```
