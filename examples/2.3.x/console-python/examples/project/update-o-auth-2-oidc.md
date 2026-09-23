```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import OAuth2Oidc
from appwrite_console.enums import ProjectOAuth2OidcPrompt

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: OAuth2Oidc = project.update_o_auth2_oidc(
    client_id = '<CLIENT_ID>', # optional
    client_secret = '<CLIENT_SECRET>', # optional
    well_known_url = 'https://example.com', # optional
    authorization_url = 'https://example.com', # optional
    token_url = 'https://example.com', # optional
    user_info_url = 'https://example.com', # optional
    prompt = [ProjectOAuth2OidcPrompt.NONE], # optional
    max_age = 0, # optional
    enabled = False # optional
)

print(result.model_dump())
```
