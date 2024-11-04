# Just Another Text Editor (J.A.T.E)

## Description

J.A.T.E (Just Another Text Editor) is a Progressive Web Application (PWA) that provides a simple, offline-capable text editor for developers and anyone needing a quick place to jot down code snippets or notes. This project demonstrates skills in implementing data persistence with IndexedDB, offline functionality through service workers, and PWA installation capabilities. Key learning outcomes include working with Webpack for module bundling, using Workbox for caching assets, and managing IndexedDB for data storage.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

To install and run the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Justbeingtai/TextEditor.git
    ```
2. Navigate into the project folder:
    ```bash
    cd cautious-meme/Develop
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Build the client assets:
    ```bash
    cd client
    npm run build
    ```
5. Start the server:
    ```bash
    cd ../server
    npm run server
    ```
6. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

To use J.A.T.E:
1. Open the text editor at `http://localhost:3000`.
2. Begin typing in the editor. Your text will automatically save to IndexedDB for persistence.
3. Click outside the editor to trigger saving the content to the database.
4. To install J.A.T.E as a PWA, click the "Install" button. Once installed, the app can be used offline.

### Screenshots
![Editor](/client/src/images/asdasdadada111.png)

## Credits

This project was created by [Tai Ho](https://github.com/Justbeingtai/TextEditor.git).

Resources and third-party libraries used:
- [idb](https://www.npmjs.com/package/idb) for IndexedDB interactions
- [Workbox](https://developers.google.com/web/tools/workbox) for service worker and caching
- [CodeMirror](https://codemirror.net/) for the text editor interface

## License

This project is licensed under the MIT License. For more information, check the [Choose a License](https://choosealicense.com/) website.

## Badges

![Node.js](https://img.shields.io/badge/node.js-14.16.0-green)
![Express.js](https://img.shields.io/badge/express-4.17.1-blue)
![Webpack](https://img.shields.io/badge/webpack-5.51.1-blue)
![Workbox](https://img.shields.io/badge/workbox-6.2.4-orange)

Badges provided by [Shields.io](https://shields.io/).

## Features

- Progressive Web App (PWA) with offline capability
- IndexedDB for persistent data storage
- Installable on desktop and mobile devices
- Clean and responsive design

## How to Contribute

To contribute to this project:

1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature/YourFeature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add new feature'
    ```
4. Push to your branch:
    ```bash
    git push origin feature/YourFeature
    ```
5. Open a pull request and describe your changes.

Refer to the [Contributor Covenant](https://www.contributor-covenant.org/) for contribution guidelines.

## Tests

To run tests:

1. Install testing dependencies:
    ```bash
    npm install --save-dev jest
    ```
2. Run tests:
    ```bash
    npm test
    ```

Add more tests as necessary to cover all features of the application.
