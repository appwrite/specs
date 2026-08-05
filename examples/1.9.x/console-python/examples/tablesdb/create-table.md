```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import Table
from appwrite_console.permission import Permission
from appwrite_console.role import Role

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: Table = tables_db.create_table(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    name = '<NAME>',
    permissions = [Permission.read(Role.any())], # optional
    row_security = False, # optional
    enabled = False, # optional
    columns = [], # optional
    indexes = [] # optional
)

print(result.model_dump())
```
