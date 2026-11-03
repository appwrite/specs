```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import Preferences

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: Preferences = project.get_prefs()

print(result.model_dump())
```
