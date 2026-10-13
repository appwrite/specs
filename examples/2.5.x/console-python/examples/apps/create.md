```python
from appwrite_console.client import Client
from appwrite_console.services.apps import Apps
from appwrite_console.models import App

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

apps = Apps(client)

result: App = apps.create(
    app_id = '<APP_ID>',
    name = '<NAME>',
    redirect_uris = [],
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
    post_logout_redirect_uris = [], # optional
    enabled = False, # optional
    type = 'public', # optional
    device_flow = False, # optional
    team_id = '<TEAM_ID>' # optional
)

print(result.model_dump())
```
