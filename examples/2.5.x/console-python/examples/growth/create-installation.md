```python
from appwrite_console.client import Client
from appwrite_console.services.growth import Growth

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

growth = Growth(client)

result = growth.create_installation(
    email = 'email@example.com', # optional
    name = '<NAME>', # optional
    version = '<VERSION>', # optional
    domain = '<DOMAIN>', # optional
    database = '<DATABASE>', # optional
    host_ip = '<HOST_IP>', # optional
    user_agent = '<USER_AGENT>', # optional
    os = '<OS>', # optional
    arch = '<ARCH>', # optional
    cpus = None, # optional
    ram = None # optional
)
```
