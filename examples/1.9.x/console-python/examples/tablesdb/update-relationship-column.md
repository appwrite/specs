```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import ColumnRelationship
from appwrite_console.enums import RelationMutate

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: ColumnRelationship = tables_db.update_relationship_column(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    key = '<KEY>',
    on_delete = RelationMutate.CASCADE, # optional
    new_key = '<NEW_KEY>' # optional
)

print(result.model_dump())
```
