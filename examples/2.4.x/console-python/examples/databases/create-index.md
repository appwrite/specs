```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import Index
from appwrite_console.enums.databases_index_type import DatabasesIndexType
from appwrite_console.enums.order_by import OrderBy

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: Index = databases.create_index(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    key = '<KEY>',
    type = DatabasesIndexType.KEY,
    attributes = ["username"],
    orders = [OrderBy.ASC], # optional
    lengths = [] # optional
)

print(result.model_dump())
```
