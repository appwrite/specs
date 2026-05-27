```python
from appwrite.client import Client
from appwrite.services.avatars import Avatars

client = Client()
client.set_endpoint('') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_session('') # The user session to authenticate with

avatars = Avatars(client)

result: bytes = avatars.get_image(
    url = 'https://example.com',
    width = 0, # optional
    height = 0 # optional
)
```
