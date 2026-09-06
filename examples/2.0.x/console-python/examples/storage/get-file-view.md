```python
from appwrite_console.client import Client
from appwrite_console.services.storage import Storage

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

storage = Storage(client)

result = storage.get_file_view(
    bucket_id = '<BUCKET_ID>',
    file_id = '<FILE_ID>',
    token = '<TOKEN>' # optional
)
```
