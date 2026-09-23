```python
from appwrite_console.client import Client
from appwrite_console.services.locale import Locale
from appwrite_console.models import CurrencyList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

locale = Locale(client)

result: CurrencyList = locale.list_currencies()

print(result.model_dump())
```
