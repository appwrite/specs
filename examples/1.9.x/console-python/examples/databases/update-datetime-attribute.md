```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import AttributeDatetime

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: AttributeDatetime = databases.update_datetime_attribute(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    key = '',
    required = False,
    default = '2020-10-15T06:38:00.000+00:00',
    new_key = '' # optional
)

print(result.model_dump())
```
