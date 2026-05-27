```ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

tables_db = TablesDB.new(client)

result = tables_db.upsert_rows(
    database_id: '<DATABASE_ID>',
    table_id: '<TABLE_ID>',
    rows: [],
    transaction_id: '<TRANSACTION_ID>' # optional
)
```
