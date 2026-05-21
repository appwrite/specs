```javascript
import { Client, Compute, Engine, Version, Region, Type, Backend, StorageClass, HighAvailabilitySyncMode } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.createDatabase({
    databaseId: '<DATABASE_ID>',
    name: '<NAME>',
    engine: Engine.Postgres, // optional
    version: Version.Postgres17, // optional
    region: Region.Fra, // optional
    type: Type.Shared, // optional
    specification: '<SPECIFICATION>', // optional
    backend: Backend.Prisma, // optional
    cpu: 125, // optional
    memory: 128, // optional
    storage: 1, // optional
    storageClass: StorageClass.Ssd, // optional
    storageMaxGb: 0, // optional
    highAvailability: false, // optional
    highAvailabilityReplicaCount: 0, // optional
    highAvailabilitySyncMode: HighAvailabilitySyncMode.Async, // optional
    networkMaxConnections: 10, // optional
    networkIdleTimeoutSeconds: 60, // optional
    networkIPAllowlist: [], // optional
    idleTimeoutMinutes: 5, // optional
    backupEnabled: false, // optional
    backupPitr: false, // optional
    backupCron: '', // optional
    backupRetentionDays: 1, // optional
    pitrRetentionDays: 1, // optional
    storageAutoscaling: false, // optional
    storageAutoscalingThresholdPercent: 50, // optional
    storageAutoscalingMaxGb: 0, // optional
    metricsEnabled: false, // optional
    poolerEnabled: false // optional
});

console.log(result);
```
