```python
from appwrite_console.client import Client
from appwrite_console.services.projects import Projects
from appwrite_console.models import Schedule
from appwrite_console.enums import ScheduleResourceType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

projects = Projects(client)

result: Schedule = projects.create_schedule(
    project_id = '<PROJECT_ID>',
    resource_type = ScheduleResourceType.FUNCTION,
    resource_id = '<RESOURCE_ID>',
    schedule = '0 0 * * *',
    active = False, # optional
    data = {} # optional
)

print(result.model_dump())
```
