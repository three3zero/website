#!/bin/bash
set -e

# Install npm dependencies including development tools
npm install

# Install pre-commit
if ! command -v pre-commit &> /dev/null; then
    echo "Installing pre-commit..."
    pip install pre-commit
fi

# Install pre-commit hooks
pre-commit install

echo "Setup complete! Pre-commit hooks are now installed."
