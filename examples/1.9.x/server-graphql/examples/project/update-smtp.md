```graphql
mutation {
    projectUpdateSMTP(
        host: "",
        port: 0,
        username: "<USERNAME>",
        password: "<PASSWORD>",
        senderEmail: "email@example.com",
        senderName: "<SENDER_NAME>",
        replyToEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        secure: "tls",
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        description
        teamId
        logo
        url
        legalName
        legalCountry
        legalState
        legalCity
        legalAddress
        legalTaxId
        authDuration
        authLimit
        authSessionsLimit
        authPasswordHistory
        authPasswordDictionary
        authPersonalDataCheck
        authDisposableEmails
        authCanonicalEmails
        authFreeEmails
        authMockNumbers {
            phone
            otp
        }
        authSessionAlerts
        authMembershipsUserName
        authMembershipsUserEmail
        authMembershipsMfa
        authMembershipsUserId
        authMembershipsUserPhone
        authInvalidateSessions
        oAuthProviders {
            key
            name
            appId
            secret
            enabled
        }
        platforms
        webhooks {
            _id
            _createdAt
            _updatedAt
            name
            url
            events
            tls
            authUsername
            authPassword
            secret
            enabled
            logs
            attempts
        }
        keys {
            _id
            _createdAt
            _updatedAt
            name
            expire
            scopes
            secret
            accessedAt
            sdks
        }
        devKeys {
            _id
            _createdAt
            _updatedAt
            name
            expire
            secret
            accessedAt
            sdks
        }
        smtpEnabled
        smtpSenderName
        smtpSenderEmail
        smtpReplyToName
        smtpReplyToEmail
        smtpHost
        smtpPort
        smtpUsername
        smtpPassword
        smtpSecure
        pingCount
        pingedAt
        labels
        status
        authEmailPassword
        authUsersAuthMagicURL
        authEmailOtp
        authAnonymous
        authInvites
        authJWT
        authPhone
        serviceStatusForAccount
        serviceStatusForAvatars
        serviceStatusForDatabases
        serviceStatusForTablesdb
        serviceStatusForLocale
        serviceStatusForHealth
        serviceStatusForProject
        serviceStatusForStorage
        serviceStatusForTeams
        serviceStatusForUsers
        serviceStatusForVcs
        serviceStatusForSites
        serviceStatusForFunctions
        serviceStatusForProxy
        serviceStatusForGraphql
        serviceStatusForMigrations
        serviceStatusForMessaging
        protocolStatusForRest
        protocolStatusForGraphql
        protocolStatusForWebsocket
        region
        billingLimits {
            bandwidth
            storage
            users
            executions
            GBHours
            imageTransformations
            authPhone
            budgetLimit
        }
        blocks {
            _createdAt
            resourceType
            resourceId
            reason
            expiredAt
        }
        consoleAccessedAt
    }
}
```
