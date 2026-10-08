```python
from appwrite_console.client import Client
from appwrite_console.services.tokens import Tokens

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tokens = Tokens(client)

result = tokens.delete(
    token_id = '<TOKEN_ID>'
)
```
