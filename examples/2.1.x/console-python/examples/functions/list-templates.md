```python
from appwrite_console.client import Client
from appwrite_console.services.functions import Functions
from appwrite_console.models import TemplateFunctionList
from appwrite_console.enums import Runtime
from appwrite_console.enums import FunctionTemplateUseCase

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

functions = Functions(client)

result: TemplateFunctionList = functions.list_templates(
    runtimes = [Runtime.NODE_14_5], # optional
    use_cases = [FunctionTemplateUseCase.STARTER], # optional
    limit = 1, # optional
    offset = 0, # optional
    total = False # optional
)

print(result.model_dump())
```
