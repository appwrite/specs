```python
from appwrite_console.client import Client
from appwrite_console.services.storage import Storage
from appwrite_console.models import File
from appwrite_console.permission import Permission
from appwrite_console.role import Role

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

storage = Storage(client)

result: File = storage.update_file(
    bucket_id = '<BUCKET_ID>',
    file_id = '<FILE_ID>',
    name = '<NAME>', # optional
    permissions = [Permission.read(Role.any())] # optional
)

print(result.model_dump())
```
