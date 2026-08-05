```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import ColumnBoolean
from appwrite_console.models import ColumnInteger
from appwrite_console.models import ColumnFloat
from appwrite_console.models import ColumnEmail
from appwrite_console.models import ColumnEnum
from appwrite_console.models import ColumnUrl
from appwrite_console.models import ColumnIp
from appwrite_console.models import ColumnDatetime
from appwrite_console.models import ColumnRelationship
from appwrite_console.models import ColumnString
from typing import Union

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: Union[ColumnBoolean, ColumnInteger, ColumnFloat, ColumnEmail, ColumnEnum, ColumnUrl, ColumnIp, ColumnDatetime, ColumnRelationship, ColumnString] = tables_db.get_column(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    key = ''
)

print(result.model_dump())
```
