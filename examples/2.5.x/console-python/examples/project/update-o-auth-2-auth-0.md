```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import OAuth2Auth0
from appwrite_console.enums.project_o_auth2_auth0_prompt import ProjectOAuth2Auth0Prompt

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: OAuth2Auth0 = project.update_o_auth2_auth0(
    client_id = '<CLIENT_ID>', # optional
    client_secret = '<CLIENT_SECRET>', # optional
    endpoint = '<ENDPOINT>', # optional
    prompt = [ProjectOAuth2Auth0Prompt.NONE], # optional
    enabled = False # optional
)

print(result.model_dump())
```
