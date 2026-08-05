```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import Project as ProjectModel
from appwrite_console.enums import ProjectProtocolId

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: ProjectModel = project.update_protocol(
    protocol_id = ProjectProtocolId.REST,
    enabled = False
)

print(result.model_dump())
```
