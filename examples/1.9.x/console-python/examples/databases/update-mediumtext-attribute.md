```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import AttributeMediumtext

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: AttributeMediumtext = databases.update_mediumtext_attribute(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    key = '',
    required = False,
    default = '<DEFAULT>',
    new_key = '' # optional
)

print(result.model_dump())
```
