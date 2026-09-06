```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import Project as ProjectModel
from appwrite_console.enums import ProjectAuthMethodId

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: ProjectModel = project.update_auth_method(
    method_id = ProjectAuthMethodId.EMAIL_PASSWORD,
    enabled = False
)

print(result.model_dump())
```
