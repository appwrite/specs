```python
from appwrite_console.client import Client
from appwrite_console.services.vectors_db import VectorsDB
from appwrite_console.models import VectorsdbCollection
from appwrite_console.permission import Permission
from appwrite_console.role import Role

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vectors_db = VectorsDB(client)

result: VectorsdbCollection = vectors_db.create_collection(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    name = '<NAME>',
    dimension = 1,
    permissions = [Permission.read(Role.any())], # optional
    document_security = False, # optional
    enabled = False # optional
)

print(result.model_dump())
```
