```python
from appwrite_console.client import Client
from appwrite_console.services.avatars import Avatars

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

avatars = Avatars(client)

result: bytes = avatars.get_image(
    url = 'https://example.com',
    width = 0, # optional
    height = 0 # optional
)
```
