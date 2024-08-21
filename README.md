# prosperity_liberation_lp
Landing page for Prosperity and Liberation Toolkit and its associated tests

## Requirements
The automated tests require Playwright. See https://playwright.dev/docs/intro

  ```sh
  npm init playwright@latest
  ```

## Usage
Choose any directory on your PC, then run npm init playwright@latest, select Javascript.
When initialization complete, extract and overwrite content of the archive.
Run tests with the --ui option for interactive mode. You can also use Visual Studio Code with installed playwright test plugin.
```sh
mpx playwright test [--ui]
```

## Configuration
The default configuration is Chromium browser. This can be changed in playwright.config.js.
