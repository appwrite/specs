```python
from appwrite_console.client import Client
from appwrite_console.services.storage import Storage
from appwrite_console.input_file import InputFile
from appwrite_console.models import File
from appwrite_console.permission import Permission
from appwrite_console.role import Role

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

storage = Storage(client)

result: File = storage.create_file(
    bucket_id = '<BUCKET_ID>',
    file_id = '<FILE_ID>',
    file = InputFile.from_path('file.png'),
    permissions = [Permission.read(Role.any())], # optional
    folder = '' # optional
)

print(result.model_dump())
```
