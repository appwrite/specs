```python
from appwrite_console.client import Client
from appwrite_console.services.notifications import Notifications
from appwrite_console.models import Notification

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

notifications = Notifications(client)

result: Notification = notifications.update(
    notification_id = '<NOTIFICATION_ID>',
    read = False
)

print(result.model_dump())
```
