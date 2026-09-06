```python
from appwrite_console.client import Client
from appwrite_console.services.apps import Apps
from appwrite_console.models import App

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

apps = Apps(client)

result: App = apps.update(
    app_id = '<APP_ID>',
    name = '<NAME>',
    description = '<DESCRIPTION>', # optional
    client_uri = 'https://example.com', # optional
    logo_uri = 'https://example.com', # optional
    privacy_policy_url = 'https://example.com', # optional
    terms_url = 'https://example.com', # optional
    contacts = [], # optional
    tagline = '<TAGLINE>', # optional
    tags = [], # optional
    images = [], # optional
    support_url = 'https://example.com', # optional
    data_deletion_url = 'https://example.com', # optional
    enabled = False, # optional
    redirect_uris = [], # optional
    post_logout_redirect_uris = [], # optional
    type = 'public', # optional
    device_flow = False, # optional
    installation_scopes = [], # optional
    installation_redirect_url = 'https://example.com' # optional
)

print(result.model_dump())
```
