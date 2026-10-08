```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import Collection
from appwrite_console.permission import Permission
from appwrite_console.role import Role

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: Collection = databases.update_collection(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    name = '<NAME>', # optional
    permissions = [Permission.read(Role.any())], # optional
    document_security = False, # optional
    enabled = False, # optional
    purge = False # optional
)

print(result.model_dump())
```
