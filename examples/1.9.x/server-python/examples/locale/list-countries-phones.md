```python
from appwrite.client import Client
from appwrite.services.locale import Locale
from appwrite.models import PhoneList

client = Client()
client.set_endpoint('') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_session('') # The user session to authenticate with

locale = Locale(client)

result: PhoneList = locale.list_countries_phones()

print(result.model_dump())
```
