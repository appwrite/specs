# Contributing to Appwrite Specs

Thank you for your interest in contributing to the Appwrite Specs repository! This document provides guidelines for contributing.

## How This Repo Works

This repository is primarily auto-generated from the [appwrite/appwrite](https://github.com/appwrite/appwrite) main repository. The specs and examples are generated using the `specs` and `sdks` CLI tasks, and PRs are created automatically.

### What's Auto-Generated

- **`specs/`** - API specification files (Swagger 2.0 and OpenAPI 3.0)
- **`examples/`** - SDK code examples for all supported languages

### What's Manually Maintained

- **`README.md`** - Repository documentation
- **`CONTRIBUTING.md`** - This file
- **`LICENSE`** - License information
- **`.gitignore`** - Git ignore rules

## Reporting Issues

### Spec Issues

If you find an issue with the API specifications (incorrect endpoints, missing parameters, wrong types, etc.), please open an issue in the [appwrite/appwrite](https://github.com/appwrite/appwrite/issues) repository, as the specs are generated from there.

### Example Issues

If you find an issue with a code example (incorrect syntax, wrong SDK usage, etc.), please open an issue in the [appwrite/appwrite](https://github.com/appwrite/appwrite/issues) repository, as the examples are generated from the SDK generators.

### Documentation Issues

If you find an issue with the README or other documentation in this repository, feel free to open an issue or submit a PR directly here.

## Submitting Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b fix/my-fix`)
3. Make your changes
4. Commit your changes (`git commit -m "fix: description of change"`)
5. Push to the branch (`git push origin fix/my-fix`)
6. Open a Pull Request

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New feature or addition
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks

## Code of Conduct

Please be respectful and constructive in all interactions. We follow the [Appwrite Code of Conduct](https://github.com/appwrite/.github/blob/main/CODE_OF_CONDUCT.md).

## Security

For security issues, please email **security@appwrite.io** instead of posting a public issue on GitHub.

## Questions?

If you have questions, feel free to reach out on our [Discord server](https://appwrite.io/discord).
