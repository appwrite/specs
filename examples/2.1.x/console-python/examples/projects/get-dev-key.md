```python
from appwrite_console.client import Client
from appwrite_console.services.projects import Projects
from appwrite_console.models import DevKey

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

projects = Projects(client)

result: DevKey = projects.get_dev_key(
    project_id = '<PROJECT_ID>',
    key_id = '<KEY_ID>'
)

print(result.model_dump())
```
