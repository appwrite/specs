```python
from appwrite_console.client import Client
from appwrite_console.services.sites import Sites
from appwrite_console.models import Site
from appwrite_console.enums import Framework
from appwrite_console.enums import BuildRuntime
from appwrite_console.enums import Adapter

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

sites = Sites(client)

result: Site = sites.update(
    site_id = '<SITE_ID>',
    name = '<NAME>',
    framework = Framework.ANALOG,
    enabled = False, # optional
    logging = False, # optional
    timeout = 1, # optional
    install_command = '<INSTALL_COMMAND>', # optional
    build_command = '<BUILD_COMMAND>', # optional
    start_command = '<START_COMMAND>', # optional
    output_directory = '<OUTPUT_DIRECTORY>', # optional
    build_runtime = BuildRuntime.NODE_14_5, # optional
    adapter = Adapter.STATIC, # optional
    fallback_file = '<FALLBACK_FILE>', # optional
    installation_id = '<INSTALLATION_ID>', # optional
    provider_repository_id = '<PROVIDER_REPOSITORY_ID>', # optional
    provider_branch = '<PROVIDER_BRANCH>', # optional
    provider_silent_mode = False, # optional
    provider_root_directory = '<PROVIDER_ROOT_DIRECTORY>', # optional
    provider_branches = [], # optional
    provider_paths = [], # optional
    build_specification = '', # optional
    runtime_specification = '', # optional
    deployment_retention = 0 # optional
)

print(result.model_dump())
```
