```python
from appwrite_console.client import Client
from appwrite_console.services.avatars import Avatars
from appwrite_console.enums import Browser

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

avatars = Avatars(client)

result = avatars.get_browser(
    code = Browser.AVANT_BROWSER,
    width = 0, # optional
    height = 0, # optional
    quality = -1 # optional
)
```
