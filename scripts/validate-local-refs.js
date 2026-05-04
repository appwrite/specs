#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = process.argv[2] || 'specs';

async function loadSwaggerParser() {
    const module = await import('@apidevtools/swagger-parser');
    return module.default || module;
}

function collectJsonFiles(dir) {
    const stat = fs.statSync(dir);

    if (stat.isFile()) {
        return dir.endsWith('.json') ? [dir] : [];
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            files.push(...collectJsonFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.json')) {
            files.push(fullPath);
        }
    }

    return files.sort();
}

async function main() {
    const specFiles = collectJsonFiles(root);

    if (specFiles.length === 0) {
        console.error(`No JSON spec files found under ${root}`);
        process.exit(1);
    }

    const SwaggerParser = await loadSwaggerParser();
    let failed = 0;
    let passed = 0;

    for (const specFile of specFiles) {
        try {
            await SwaggerParser.dereference(specFile, {
                validate: {
                    schema: false,
                    spec: false,
                },
            });
            console.log(`${specFile}: OK`);
            passed += 1;
        } catch (error) {
            console.error(`${specFile}: FAILED`);
            console.error(`  ${error.message}`);
            failed += 1;
        }
    }

    console.log('');
    console.log(`Results: ${passed} passed, ${failed} failed`);

    if (failed > 0) {
        process.exit(1);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
