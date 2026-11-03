```python
from appwrite_console.client import Client
from appwrite_console.services.tokens import Tokens
from appwrite_console.models import ResourceToken

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tokens = Tokens(client)

result: ResourceToken = tokens.create_file_token(
    bucket_id = '<BUCKET_ID>',
    file_id = '<FILE_ID>',
    expire = '2020-10-15T06:38:00.000+00:00' # optional
)

print(result.model_dump())
```
