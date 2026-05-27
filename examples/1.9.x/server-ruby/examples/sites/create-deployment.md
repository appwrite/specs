```ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

sites = Sites.new(client)

result = sites.create_deployment(
    site_id: '<SITE_ID>',
    code: InputFile.from_path('dir/file.png'),
    install_command: '<INSTALL_COMMAND>', # optional
    build_command: '<BUILD_COMMAND>', # optional
    output_directory: '<OUTPUT_DIRECTORY>', # optional
    activate: false # optional
)
```
