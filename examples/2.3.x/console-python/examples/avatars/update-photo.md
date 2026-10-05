```python
from appwrite_console.client import Client
from appwrite_console.services.avatars import Avatars
from appwrite_console.input_file import InputFile
from appwrite_console.models import Account

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

avatars = Avatars(client)

result: Account = avatars.update_photo(
    file = InputFile.from_path('file.png')
)

print(result.model_dump())
```
