```ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

users = Users.new(client)

result = users.list_identities(
    queries: [], # optional
    search: '<SEARCH>', # optional
    total: false # optional
)
```
