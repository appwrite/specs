```python
from appwrite_console.client import Client
from appwrite_console.services.storage import Storage
from appwrite_console.models import FileList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

storage = Storage(client)

result: FileList = storage.list_files(
    bucket_id = '<BUCKET_ID>',
    queries = [], # optional
    search = '<SEARCH>', # optional
    total = False # optional
)

print(result.model_dump())
```
