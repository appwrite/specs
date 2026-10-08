```python
from appwrite_console.client import Client
from appwrite_console.services.storage import Storage
from appwrite_console.models import File

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

storage = Storage(client)

result: File = storage.get_file(
    bucket_id = '<BUCKET_ID>',
    file_id = '<FILE_ID>'
)

print(result.model_dump())
```
