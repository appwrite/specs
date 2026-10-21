```python
from appwrite_console.client import Client
from appwrite_console.services.organization import Organization
from appwrite_console.models import Project

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organization = Organization(client)

result: Project = organization.update_project(
    project_id = '<PROJECT_ID>',
    name = '<NAME>'
)

print(result.model_dump())
```
