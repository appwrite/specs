```python
from appwrite_console.client import Client
from appwrite_console.services.organization import Organization
from appwrite_console.models import Project
from appwrite_console.enums import Region

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organization = Organization(client)

result: Project = organization.create_project(
    project_id = '',
    name = '<NAME>',
    region = Region.FRA # optional
)

print(result.model_dump())
```
