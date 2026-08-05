```python
from appwrite_console.client import Client
from appwrite_console.services.apps import Apps
from appwrite_console.models import AppSecret

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

apps = Apps(client)

result: AppSecret = apps.get_secret(
    app_id = '<APP_ID>',
    secret_id = '<SECRET_ID>'
)

print(result.model_dump())
```
