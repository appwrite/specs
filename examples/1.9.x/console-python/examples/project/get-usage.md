```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import UsageProject
from appwrite_console.enums import ProjectUsageRange

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: UsageProject = project.get_usage(
    start_date = '2020-10-15T06:38:00.000+00:00',
    end_date = '2020-10-15T06:38:00.000+00:00',
    period = ProjectUsageRange.ONEHOUR # optional
)

print(result.model_dump())
```
