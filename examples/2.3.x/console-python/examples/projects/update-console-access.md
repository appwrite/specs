```python
from appwrite_console.client import Client
from appwrite_console.services.projects import Projects

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

projects = Projects(client)

result = projects.update_console_access(
    project_id = '<PROJECT_ID>'
)
```
