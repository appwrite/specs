```graphql
mutation {
    projectUpdateLDAP(
        enabled: false,
        hosts: ["ldap.example.com"],
        port: 636,
        encryption: "none",
        verification: false,
        certificate: "<CERTIFICATE>",
        timeout: 10,
        baseDn: "ou=people,dc=example,dc=com",
        bindDn: "cn=appwrite,ou=services,dc=example,dc=com",
        bindPassword: "password",
        userFilter: "(uid={username})",
        requiredGroupDn: "cn=staff,ou=groups,dc=example,dc=com",
        idAttribute: "entryUUID",
        emailAttribute: "mail",
        nameAttribute: "cn",
        phoneAttribute: "mobile"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        teamId
        region
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
        ldapEnabled
        ldapHosts
        ldapPort
        ldapEncryption
        ldapVerification
        ldapCertificate
        ldapTimeout
        ldapBaseDn
        ldapBindDn
        ldapBindPassword
        ldapUserFilter
        ldapRequiredGroupDn
        ldapIdAttribute
        ldapEmailAttribute
        ldapNameAttribute
        ldapPhoneAttribute
        pingCount
        pingedAt
        labels
        prefs {
            data
        }
        status
        onboarding
        authMethods {
            _id
            enabled
        }
        services {
            _id
            enabled
        }
        protocols {
            _id
            enabled
        }
        blocks {
            _createdAt
            resourceType
            resourceId
            mode
            expiredAt
        }
        consoleAccessedAt
        wafEnabled
        parentId
        environmentId
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
        firstAccessedAt
        mcpAccessedAt
        oAuth2ServerEnabled
        oAuth2ServerAuthorizationUrl
        oAuth2ServerScopes
        oAuth2ServerDefaultScopes
        oAuth2ServerInstallationScopes
        oAuth2ServerAuthorizationDetailsTypes
        oAuth2ServerAccessTokenDuration
        oAuth2ServerRefreshTokenDuration
        oAuth2ServerPublicAccessTokenDuration
        oAuth2ServerPublicRefreshTokenDuration
        oAuth2ServerInstallationAccessTokenDuration
        oAuth2ServerConfidentialPkce
        oAuth2ServerVerificationUrl
        oAuth2ServerUserCodeLength
        oAuth2ServerUserCodeFormat
        oAuth2ServerDeviceCodeDuration
        oAuth2ServerDiscoveryUrl
    }
}
```
