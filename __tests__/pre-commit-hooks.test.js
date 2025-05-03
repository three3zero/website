import fs from 'fs';
import path from 'path';

describe('Pre-commit hooks configuration', () => {
  test('pre-commit config file exists', () => {
    const configPath = path.join(process.cwd(), '.pre-commit-config.yaml');
    expect(fs.existsSync(configPath)).toBe(true);
  });

  test('husky pre-commit hook exists', () => {
    const hookPath = path.join(process.cwd(), '.husky', 'pre-commit');
    expect(fs.existsSync(hookPath)).toBe(true);
  });

  test('lint-staged config exists', () => {
    const lintStagedPath = path.join(process.cwd(), '.lintstagedrc.js');
    expect(fs.existsSync(lintStagedPath)).toBe(true);
  });

  test('prettier config exists', () => {
    const prettierPath = path.join(process.cwd(), '.prettierrc');
    expect(fs.existsSync(prettierPath)).toBe(true);
  });

  test('package.json has required scripts', () => {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    expect(packageJson.scripts).toHaveProperty('format');
    expect(packageJson.scripts).toHaveProperty('typecheck');
    expect(packageJson.scripts).toHaveProperty('prepare');
  });

  test('package.json has required dev dependencies', () => {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    expect(packageJson.devDependencies).toHaveProperty('husky');
    expect(packageJson.devDependencies).toHaveProperty('lint-staged');
    expect(packageJson.devDependencies).toHaveProperty('prettier');
  });
});
