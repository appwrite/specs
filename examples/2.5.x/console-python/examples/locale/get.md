```python
from appwrite_console.client import Client
from appwrite_console.services.locale import Locale
from appwrite_console.models import Locale as LocaleModel

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

locale = Locale(client)

result: LocaleModel = locale.get()

print(result.model_dump())
```
