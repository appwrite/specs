```python
from appwrite_console.client import Client
from appwrite_console.services.storage import Storage
from appwrite_console.enums import ImageGravity
from appwrite_console.enums import ImageFormat

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

storage = Storage(client)

result: bytes = storage.get_file_preview(
    bucket_id = '<BUCKET_ID>',
    file_id = '<FILE_ID>',
    width = 0, # optional
    height = 0, # optional
    gravity = ImageGravity.CENTER, # optional
    quality = -1, # optional
    border_width = 0, # optional
    border_color = '', # optional
    border_radius = 0, # optional
    opacity = 0, # optional
    rotation = -360, # optional
    background = '', # optional
    output = ImageFormat.JPG, # optional
    token = '<TOKEN>' # optional
)
```
