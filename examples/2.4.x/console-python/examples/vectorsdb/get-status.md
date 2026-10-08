```python
from appwrite_console.client import Client
from appwrite_console.services.vectors_db import VectorsDB
from appwrite_console.models import DatabaseStatus

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vectors_db = VectorsDB(client)

result: DatabaseStatus = vectors_db.get_status(
    database_id = '<DATABASE_ID>'
)

print(result.model_dump())
```
