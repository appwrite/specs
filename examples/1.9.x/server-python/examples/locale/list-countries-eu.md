```python
from appwrite.client import Client
from appwrite.services.locale import Locale
from appwrite.models import CountryList

client = Client()
client.set_endpoint('') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_session('') # The user session to authenticate with

locale = Locale(client)

result: CountryList = locale.list_countries_eu()

print(result.model_dump())
```
