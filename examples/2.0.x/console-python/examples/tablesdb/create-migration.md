```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import DatabaseMigration

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: DatabaseMigration = tables_db.create_migration(
    database_id = '<DATABASE_ID>',
    specification = 's-1vcpu-1gb',
    auto_cutover = False # optional
)

print(result.model_dump())
```
