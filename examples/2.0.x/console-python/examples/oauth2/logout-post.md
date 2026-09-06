```python
from appwrite_console.client import Client
from appwrite_console.services.oauth2 import Oauth2

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

oauth2 = Oauth2(client)

result = oauth2.logout_post(
    id_token_hint = '<ID_TOKEN_HINT>', # optional
    logout_hint = '<LOGOUT_HINT>', # optional
    client_id = '<CLIENT_ID>', # optional
    post_logout_redirect_uri = 'https://example.com', # optional
    state = '<STATE>', # optional
    ui_locales = '<UI_LOCALES>' # optional
)
```
