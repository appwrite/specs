```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import EphemeralKey
from appwrite_console.enums import ProjectKeyScopes

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: EphemeralKey = project.create_ephemeral_key(
    scopes = [ProjectKeyScopes.PROJECT_READ],
    duration = 600
)

print(result.model_dump())
```
