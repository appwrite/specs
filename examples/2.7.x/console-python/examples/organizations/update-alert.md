```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import Alert

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: Alert = organizations.update_alert(
    organization_id = '<ORGANIZATION_ID>',
    alert_id = '<ALERT_ID>',
    acknowledged = False
)

print(result.model_dump())
```
