```python
from appwrite_console.client import Client
from appwrite_console.services.vectors_db import VectorsDB
from appwrite_console.models import Document
from appwrite_console.permission import Permission
from appwrite_console.role import Role

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vectors_db = VectorsDB(client)

result: Document = vectors_db.create_document(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    document_id = '<DOCUMENT_ID>',
    data = {
        "embeddings": [
            0.12,
            -0.55,
            0.88,
            1.02
        ],
        "metadata": {
            "key": "value"
        }
    },
    permissions = [Permission.read(Role.any())] # optional
)

print(result.model_dump())
```
