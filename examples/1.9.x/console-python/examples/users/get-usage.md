```python
from appwrite_console.client import Client
from appwrite_console.services.users import Users
from appwrite_console.models import UsageUsers
from appwrite_console.enums import UsageRange

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

users = Users(client)

result: UsageUsers = users.get_usage(
    range = UsageRange.VALUE24H # optional
)

print(result.model_dump())
```
