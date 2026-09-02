```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import ColumnIndex
from appwrite_console.enums import TablesDBIndexType
from appwrite_console.enums import OrderBy

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: ColumnIndex = tables_db.create_index(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    key = '<KEY>',
    type = TablesDBIndexType.KEY,
    columns = [],
    orders = [OrderBy.ASC], # optional
    lengths = [] # optional
)

print(result.model_dump())
```
