```javascript
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.deleteTransaction({
    transactionId: '<TRANSACTION_ID>'
});

console.log(result);
```
