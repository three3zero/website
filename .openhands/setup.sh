#!/bin/bash
set -e

# The site is built with Zola (https://www.getzola.org/).
if ! command -v zola &> /dev/null; then
    echo "Zola is not installed. On Arch/Manjaro: sudo pacman -S zola" >&2
fi

# Install pre-commit
if ! command -v pre-commit &> /dev/null; then
    echo "Installing pre-commit..."
    pip install pre-commit
fi

pre-commit install

echo "Setup complete! Pre-commit hooks are now installed."
