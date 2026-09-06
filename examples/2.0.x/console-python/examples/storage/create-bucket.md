```python
from appwrite_console.client import Client
from appwrite_console.services.storage import Storage
from appwrite_console.models import Bucket
from appwrite_console.enums import Compression
from appwrite_console.permission import Permission
from appwrite_console.role import Role

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

storage = Storage(client)

result: Bucket = storage.create_bucket(
    bucket_id = '<BUCKET_ID>',
    name = '<NAME>',
    permissions = [Permission.read(Role.any())], # optional
    file_security = False, # optional
    enabled = False, # optional
    maximum_file_size = 1, # optional
    allowed_file_extensions = [], # optional
    compression = Compression.NONE, # optional
    encryption = False, # optional
    antivirus = False, # optional
    transformations = False # optional
)

print(result.model_dump())
```
