```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import OAuth2Okta
from appwrite_console.enums import ProjectOAuth2OktaPrompt

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: OAuth2Okta = project.update_o_auth2_okta(
    client_id = '<CLIENT_ID>', # optional
    client_secret = '<CLIENT_SECRET>', # optional
    domain = 'example.com', # optional
    authorization_server_id = '<AUTHORIZATION_SERVER_ID>', # optional
    prompt = [ProjectOAuth2OktaPrompt.NONE], # optional
    enabled = False # optional
)

print(result.model_dump())
```
