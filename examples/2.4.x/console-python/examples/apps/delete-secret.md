```python
from appwrite_console.client import Client
from appwrite_console.services.apps import Apps

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

apps = Apps(client)

result = apps.delete_secret(
    app_id = '<APP_ID>',
    secret_id = '<SECRET_ID>'
)
```
