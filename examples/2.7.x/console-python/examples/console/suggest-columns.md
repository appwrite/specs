```python
from appwrite_console.client import Client
from appwrite_console.services.console import Console
from appwrite_console.models import ColumnList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

console = Console(client)

result: ColumnList = console.suggest_columns(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    context = '<CONTEXT>', # optional
    min = 1, # optional
    max = 1 # optional
)

print(result.model_dump())
```
