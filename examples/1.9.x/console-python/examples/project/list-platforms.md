```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import PlatformList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: PlatformList = project.list_platforms(
    queries = [], # optional
    total = False # optional
)

print(result.model_dump())
```
