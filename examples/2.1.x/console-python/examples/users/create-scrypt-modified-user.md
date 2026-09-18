```python
from appwrite_console.client import Client
from appwrite_console.services.users import Users
from appwrite_console.models import User

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

users = Users(client)

result: User = users.create_scrypt_modified_user(
    user_id = '<USER_ID>',
    email = 'email@example.com',
    password = 'password',
    password_salt = '<PASSWORD_SALT>',
    password_salt_separator = '<PASSWORD_SALT_SEPARATOR>',
    password_signer_key = '<PASSWORD_SIGNER_KEY>',
    name = '<NAME>' # optional
)

print(result.model_dump())
```
