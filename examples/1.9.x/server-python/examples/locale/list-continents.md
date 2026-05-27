```python
from appwrite.client import Client
from appwrite.services.locale import Locale
from appwrite.models import ContinentList

client = Client()
client.set_endpoint('') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_session('') # The user session to authenticate with

locale = Locale(client)

result: ContinentList = locale.list_continents()

print(result.model_dump())
```
