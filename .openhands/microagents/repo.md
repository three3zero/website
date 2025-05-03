# Repository Information for OpenHands

## Environment

- **Language**: TypeScript/JavaScript
- **Runtime**: Node.js
- **Package Manager**: npm

## Setup Instructions

Run `.openhands/setup.sh` to install dependencies and set up pre-commit hooks

## Development Workflow

1. Make your changes
2. Pre-commit hooks will automatically run to check:
   - TypeScript type checking
   - ESLint for code quality
   - Prettier for code formatting
   - Jest tests
3. If all checks pass, your commit will proceed
4. If any checks fail, fix the issues and try again

## Testing

- Run `npm test` to execute all tests
- All tests must pass before committing

## Before Pushing

- Ensure all tests pass
- Make sure all pre-commit hooks pass successfully
- Verify that your changes meet the project's code quality standards

## Commit Messages

This repository follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages.

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files

### Examples

```
feat: add new CLI command for listing resources
fix(parser): handle edge case in JSON parsing
docs: update installation instructions
```
