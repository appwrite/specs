```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import ColumnMediumtext

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: ColumnMediumtext = tables_db.update_mediumtext_column(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    key = '<KEY>',
    required = False,
    default = 'Hello World',
    new_key = '<NEW_KEY>' # optional
)

print(result.model_dump())
```
