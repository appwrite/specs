```python
from appwrite_console.client import Client
from appwrite_console.services.postgresql import Postgresql
from appwrite_console.models import DedicatedDatabasePITRWindows

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

postgresql = Postgresql(client)

result: DedicatedDatabasePITRWindows = postgresql.get_pitr(
    database_id = '<DATABASE_ID>'
)

print(result.model_dump())
```
