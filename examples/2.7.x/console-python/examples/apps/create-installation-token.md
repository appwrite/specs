```python
from appwrite_console.client import Client
from appwrite_console.services.apps import Apps
from appwrite_console.models import Oauth2Token

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

apps = Apps(client)

result: Oauth2Token = apps.create_installation_token(
    app_id = '<APP_ID>',
    installation_id = '<INSTALLATION_ID>'
)

print(result.model_dump())
```
