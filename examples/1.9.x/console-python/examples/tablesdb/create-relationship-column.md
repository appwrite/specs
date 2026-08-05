```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import ColumnRelationship
from appwrite_console.enums import RelationshipType
from appwrite_console.enums import RelationMutate

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: ColumnRelationship = tables_db.create_relationship_column(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    related_table_id = '<RELATED_TABLE_ID>',
    type = RelationshipType.ONETOONE,
    two_way = False, # optional
    key = '', # optional
    two_way_key = '', # optional
    on_delete = RelationMutate.CASCADE # optional
)

print(result.model_dump())
```
