# Project Setup and Instructions

## Overview

This project includes a mockup server (`db.js`) and an Angular application. Below are the steps to set up and run both the server and the Angular application.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [npm](https://npmjs.com/) (Node Package Manager)
- [Angular CLI](https://angular.io/cli) (if not installed, run `npm install -g @angular/cli`)

## Setting Up the Mockup Server

1. **Install dependencies** for the mockup server:

   - Navigate to the folder where `db.js` is located and open a terminal window.
   - Run the following command to install the necessary dependencies:

     ```bash
     npm install
     ```

2. **Run the mockup server**:

   - After installing the dependencies, start the mockup server using the following command:

     ```bash
     npm run server
     ```

   This will start the mockup server, and you should see output indicating that it's running, typically on `http://localhost:5000` 

## Running the Angular App

1. **Install Angular app dependencies**:

   - If you haven't already, navigate to the root of your Angular application folder and install its dependencies by running:

     ```bash
     npm install
     ```

2. **Start the Angular application**:

   - After the dependencies are installed, you can start the Angular application by running one of the following commands:

     - **Using Angular CLI**:

       ```bash
       ng serve
       ```

     - **Using npm** (if you prefer the npm script):

       ```bash
       npm start
       ```

   This will start the Angular development server and you can access the application in your browser at `http://localhost:4200`.

## Troubleshooting

- If you encounter errors related to missing packages or dependencies, try running `npm install` again in both the server and Angular app directories.
- Ensure that the mockup server is running before starting the Angular app, especially if your Angular app relies on data from the mockup server.

## Contributing

Feel free to contribute by forking the repo, making changes, and submitting pull requests.

---

### License

This project is licensed under the [MIT License](LICENSE).
