```javascript
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const sites = new sdk.Sites(client);

const result = await sites.update({
    siteId: '<SITE_ID>',
    name: '<NAME>',
    framework: sdk.SiteFramework.Analog,
    enabled: false, // optional
    logging: false, // optional
    timeout: 1, // optional
    installCommand: '<INSTALL_COMMAND>', // optional
    buildCommand: '<BUILD_COMMAND>', // optional
    startCommand: '<START_COMMAND>', // optional
    outputDirectory: '<OUTPUT_DIRECTORY>', // optional
    buildRuntime: sdk.SiteBuildRuntime.Node145, // optional
    adapter: sdk.SiteAdapter.Static, // optional
    fallbackFile: '<FALLBACK_FILE>', // optional
    installationId: '<INSTALLATION_ID>', // optional
    providerRepositoryId: '<PROVIDER_REPOSITORY_ID>', // optional
    providerBranch: '<PROVIDER_BRANCH>', // optional
    providerSilentMode: false, // optional
    providerRootDirectory: '<PROVIDER_ROOT_DIRECTORY>', // optional
    providerBranches: [], // optional
    providerPaths: [], // optional
    buildSpecification: '', // optional
    runtimeSpecification: '', // optional
    deploymentRetention: 0 // optional
});
```
