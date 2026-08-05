```python
from appwrite_console.client import Client
from appwrite_console.services.postgresql import Postgresql
from appwrite_console.models import DedicatedDatabaseOperationList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

postgresql = Postgresql(client)

result: DedicatedDatabaseOperationList = postgresql.list_operations(
    database_id = '<DATABASE_ID>',
    status = 'running', # optional
    limit = 1, # optional
    offset = 0 # optional
)

print(result.model_dump())
```
