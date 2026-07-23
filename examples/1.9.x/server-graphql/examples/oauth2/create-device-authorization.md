```graphql
mutation {
    oauth2CreateDeviceAuthorization(
        clientId: "<CLIENT_ID>",
        scope: "<SCOPE>",
        authorizationDetails: "<AUTHORIZATION_DETAILS>",
        resource: "",
        audience: "<AUDIENCE>"
    ) {
        device_code
        user_code
        verification_uri
        verification_uri_complete
        expires_in
        interval
    }
}
mutation {
    oauth2CreateDeviceAuthorization(
        clientId: "<CLIENT_ID>",
        scope: "<SCOPE>",
        authorizationDetails: "<AUTHORIZATION_DETAILS>",
        resource: "",
        audience: "<AUDIENCE>"
    ) {
        device_code
        user_code
        verification_uri
        verification_uri_complete
        expires_in
        interval
    }
}
```
