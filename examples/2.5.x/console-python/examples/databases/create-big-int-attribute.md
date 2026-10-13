```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import AttributeBigint

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: AttributeBigint = databases.create_big_int_attribute(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    key = '<KEY>',
    required = False,
    min = 0, # optional
    max = 1000000, # optional
    default = 0, # optional
    array = False # optional
)

print(result.model_dump())
```
