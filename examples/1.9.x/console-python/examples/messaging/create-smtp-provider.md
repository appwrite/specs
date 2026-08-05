```python
from appwrite_console.client import Client
from appwrite_console.services.messaging import Messaging
from appwrite_console.models import Provider
from appwrite_console.enums import SmtpEncryption

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

messaging = Messaging(client)

result: Provider = messaging.create_smtp_provider(
    provider_id = '<PROVIDER_ID>',
    name = '<NAME>',
    host = '<HOST>',
    port = 1, # optional
    username = '<USERNAME>', # optional
    password = 'password', # optional
    encryption = SmtpEncryption.NONE, # optional
    auto_tls = False, # optional
    mailer = '<MAILER>', # optional
    from_name = '<FROM_NAME>', # optional
    from_email = 'email@example.com', # optional
    reply_to_name = '<REPLY_TO_NAME>', # optional
    reply_to_email = 'email@example.com', # optional
    enabled = False # optional
)

print(result.model_dump())
```
