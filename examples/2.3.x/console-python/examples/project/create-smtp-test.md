```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result = project.create_smtp_test(
    emails = []
)
```
