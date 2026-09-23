```python
from appwrite_console.client import Client
from appwrite_console.services.tokens import Tokens
from appwrite_console.models import ResourceToken

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tokens = Tokens(client)

result: ResourceToken = tokens.get(
    token_id = '<TOKEN_ID>'
)

print(result.model_dump())
```
