# Repository Information for OpenHands

## Environment

- **Language**: TypeScript/JavaScript
- **Runtime**: Node.js
- **Package Manager**: npm

## Setup Instructions

1. Run `npm install` to install all dependencies
2. Run `.openhands/setup.sh` to set up pre-commit hooks

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
