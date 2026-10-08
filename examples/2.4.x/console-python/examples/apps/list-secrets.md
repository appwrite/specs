```python
from appwrite_console.client import Client
from appwrite_console.services.apps import Apps
from appwrite_console.models import AppSecretList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

apps = Apps(client)

result: AppSecretList = apps.list_secrets(
    app_id = '<APP_ID>',
    queries = [], # optional
    total = False # optional
)

print(result.model_dump())
```
