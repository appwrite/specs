```python
from appwrite_console.client import Client
from appwrite_console.services.projects import Projects
from appwrite_console.models import Stage

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

projects = Projects(client)

result: Stage = projects.update_stage(
    project_id = '<PROJECT_ID>',
    stage_id = '<STAGE_ID>',
    skip = False # optional
)

print(result.model_dump())
```
