```python
from appwrite_console.client import Client
from appwrite_console.services.users import Users
from appwrite_console.models import User

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

users = Users(client)

result: User = users.create_bcrypt_user(
    user_id = '<USER_ID>',
    email = 'email@example.com',
    password = 'password',
    name = '<NAME>' # optional
)

print(result.model_dump())
```
