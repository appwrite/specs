```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import MockNumber

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: MockNumber = project.update_mock_phone(
    number = '+12065550100',
    otp = '<OTP>'
)

print(result.model_dump())
```
