```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import AttributeLongtext

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: AttributeLongtext = databases.update_longtext_attribute(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    key = '<KEY>',
    required = False,
    default = 'Hello World',
    new_key = '<NEW_KEY>' # optional
)

print(result.model_dump())
```
