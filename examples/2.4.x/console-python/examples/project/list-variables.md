```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import VariableList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: VariableList = project.list_variables(
    queries = [], # optional
    total = False # optional
)

print(result.model_dump())
```
