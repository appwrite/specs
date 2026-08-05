```python
from appwrite_console.client import Client
from appwrite_console.services.console import Console
from appwrite_console.models import EmailTemplate
from appwrite_console.enums import ProjectEmailTemplateId
from appwrite_console.enums import ProjectEmailTemplateLocale

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

console = Console(client)

result: EmailTemplate = console.get_email_template(
    template_id = ProjectEmailTemplateId.VERIFICATION,
    locale = ProjectEmailTemplateLocale.AF # optional
)

print(result.model_dump())
```
