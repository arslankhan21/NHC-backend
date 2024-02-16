# NHC Metverse Backend exd

## Introduction

NHC Metaverse Backend is a Node.js-based application that serves as the core backend infrastructure for the NHC Metaverse AR game. It leverages a variety of technologies and dependencies to facilitate a smooth and immersive gaming experience.

## Technologies

NHC Metaverse Backend uses a number of open source projects to work properly:

* [node.js] - Evented I/O for the backend
* [Express] - A fast Node.js network app framework
* [Mongoose](https://mongoosejs.com/) - An ORM for MongoDB

## Installation

NHC Metaverse requires [Node.js](https://nodejs.org/) v16+ and [MongoDB](https://www.mongodb.com/) v5+ to run.

To get started with this project, follow these steps:

1. Clone the repository to your local machine using `git clone`.

    ``` git clone https://gitlab.com/seaside1/crypto-hunters-ar-game/crypto-hunters-backend.git ```

    **Note**: If the repository is private, you will be prompted to enter your GitLab username and password or access token during the cloning process.

2. Navigate to the project directory.

    ```sh
    cd nhc-backend
    ```

3. Install the dependencies and devDependencies using npm

    ```sh
    npm install
    ```

4. Start the server

    ```sh
    npm start
    ```

You should see output similar to the following:

    ```sh
    $ node src/index.js
    Server is listening on 5001
    Mongoose connected
    ```

## Usage

To start the project, you can use one of the following commands:

- To start the project in production mode:

```sh
  npm start
```

- To start the project in development mode with auto-reload:

```sh
  npm run dev
```

## .env Configuration

In the project folder, locate the `.env-example` file. Rename it to `.env` and customize the values based on the environment-specific configuration provided to you. The .env file should contain the variables, defined in `.env-example` file.

## Important Configuration Files

<!-- To run this project successfully, you'll need to have the following files in your project directory:

### `crypto-hunters-game-d1403641ada8.json` -->

<!-- This file contains important service account information for the project. It's necessary for the functioning of certain components in the project. Please ensure that this file is located in the root directory of your project.

It includes sensitive credentials required for specific services. For security reasons, this file is not included in the project repository.

### `crypto-hunters-game-firebase-adminsdk-xva6p-5ea9693f65.json` -->

<!-- Similar to the previous file, this JSON file contains sensitive credentials related to Firebase services used in the project. It is also excluded from the repository for security purposes.

Make sure this file is also placed in the root directory of your project. -->

**Note**: Please exercise caution when handling these files to maintain the security of your project.

## Scripts

- Starts the project in production mode

```sh
  npm start
```

- Starts the project in development mode with auto-reload

```sh
  npm run dev
```

## .gitignore

This project includes a `.gitignore` file to exclude certain files and directories from version control. 
Here's an overview of what's excluded:

- `/node_modules`: Excludes the `node_modules` directory, which contains project dependencies. It's common practice not to include these files in version control to keep the repository size smaller.

- `.env`: Excludes the `.env` file, which typically contains sensitive environment variables and secrets. This file should not be shared publicly.

- `/.vscode`: Excludes IDE or editor configuration files for Visual Studio Code.

- `/.idea/workspace.xml`: Excludes workspace configuration for JetBrains IDEs like IntelliJ IDEA.

- `src/dbMutation.js`: Excludes specific testing-related files.

- `crypto-hunters-game-d1403641ada8.json` and `crypto-hunters-game-firebase-adminsdk-xva6p-5ea9693f65.json`: Excludes service account and Firebase private key files containing sensitive credentials.

- `.prettierignore` and `.prettierrc`: Excludes configuration files related to code formatting.

These exclusions help keep the repository clean and avoid committing sensitive information. Please make sure to handle these files appropriately when working with the project.