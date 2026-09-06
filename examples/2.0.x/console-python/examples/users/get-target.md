```python
from appwrite_console.client import Client
from appwrite_console.services.users import Users
from appwrite_console.models import Target

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

users = Users(client)

result: Target = users.get_target(
    user_id = '<USER_ID>',
    target_id = '<TARGET_ID>'
)

print(result.model_dump())
```
