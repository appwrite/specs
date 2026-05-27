```ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

tokens = Tokens.new(client)

result = tokens.list(
    bucket_id: '<BUCKET_ID>',
    file_id: '<FILE_ID>',
    queries: [], # optional
    total: false # optional
)
```
