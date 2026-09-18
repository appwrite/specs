```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import OAuth2Dropbox

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: OAuth2Dropbox = project.update_o_auth2_dropbox(
    app_key = '<APP_KEY>', # optional
    app_secret = '<APP_SECRET>', # optional
    enabled = False # optional
)

print(result.model_dump())
```
