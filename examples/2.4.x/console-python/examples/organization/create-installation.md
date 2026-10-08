```python
from appwrite_console.client import Client
from appwrite_console.services.organization import Organization
from appwrite_console.models import AppInstallation

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organization = Organization(client)

result: AppInstallation = organization.create_installation(
    app_id = '<APP_ID>',
    authorization_details = '<AUTHORIZATION_DETAILS>' # optional
)

print(result.model_dump())
```
