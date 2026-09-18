```python
from appwrite_console.client import Client
from appwrite_console.services.mongo import Mongo
from appwrite_console.models import DedicatedDatabaseRestorationList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

mongo = Mongo(client)

result: DedicatedDatabaseRestorationList = mongo.list_restorations(
    database_id = '<DATABASE_ID>',
    status = 'pending', # optional
    type = 'backup', # optional
    limit = 1, # optional
    offset = 0 # optional
)

print(result.model_dump())
```
