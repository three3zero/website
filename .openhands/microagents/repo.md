# Repository Information for OpenHands

## Environment

- **Site generator**: [Zola](https://www.getzola.org/) 0.23 (static site, Tera v2 templates)
- **Content**: Markdown with TOML front matter in `content/`
- **Deploy**: GitHub Pages via `.github/workflows/pages.yml` on push to `main`

## Setup Instructions

Run `.openhands/setup.sh` to set up pre-commit hooks. Zola must be installed separately.

## Development Workflow

1. Make your changes
2. Run `zola serve --drafts` to preview, and `zola check` to validate links
3. Pre-commit hooks run basic file checks and `zola check`

## Design

The approved design brief and reference artboards are in `docs/design/`. Match them.

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
