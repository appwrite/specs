```python
from appwrite_console.client import Client
from appwrite_console.services.presences import Presences
from appwrite_console.models import Presence
from appwrite_console.permission import Permission
from appwrite_console.role import Role

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

presences = Presences(client)

result: Presence = presences.update(
    presence_id = '<PRESENCE_ID>',
    status = '<STATUS>', # optional
    expires_at = '2020-10-15T06:38:00.000+00:00', # optional
    metadata = {}, # optional
    permissions = [Permission.read(Role.any())], # optional
    purge = False # optional
)

print(result.model_dump())
```
