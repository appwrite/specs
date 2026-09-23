```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import Key
from appwrite_console.enums import ProjectKeyScopes

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: Key = project.create_key(
    key_id = '<KEY_ID>',
    name = '<NAME>',
    scopes = [ProjectKeyScopes.PROJECT_READ],
    expire = '2020-10-15T06:38:00.000+00:00' # optional
)

print(result.model_dump())
```
