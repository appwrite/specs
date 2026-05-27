```ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

sites = Sites.new(client)

result = sites.create_variable(
    site_id: '<SITE_ID>',
    variable_id: '<VARIABLE_ID>',
    key: '<KEY>',
    value: '<VALUE>',
    secret: false # optional
)
```
