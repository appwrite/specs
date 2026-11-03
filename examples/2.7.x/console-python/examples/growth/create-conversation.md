```python
from appwrite_console.client import Client
from appwrite_console.services.growth import Growth
from appwrite_console.input_file import InputFile
from appwrite_console.models import GrowthConversation
from appwrite_console.enums.conversation_type import ConversationType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

growth = Growth(client)

result: GrowthConversation = growth.create_conversation(
    type = ConversationType.SUPPORT,
    email = 'email@example.com', # optional
    name = '<NAME>', # optional
    subject = '<SUBJECT>', # optional
    message = '<MESSAGE>', # optional
    organization_id = '<ORGANIZATION_ID>', # optional
    project_id = '<PROJECT_ID>', # optional
    attributes = {}, # optional
    attachment = InputFile.from_path('file.png') # optional
)

print(result.model_dump())
```
