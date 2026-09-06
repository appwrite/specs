```graphql
query {
    usersListLogs(
        userId: "<USER_ID>",
        queries: [],
        total: false
    ) {
        total
        logs {
            event
            userId
            userEmail
            userName
            mode
            userType
            ip
            time
            osCode
            osName
            osVersion
            clientType
            clientCode
            clientName
            clientVersion
            clientEngine
            clientEngineVersion
            deviceName
            deviceBrand
            deviceModel
            countryCode
            countryName
        }
    }
}
```
