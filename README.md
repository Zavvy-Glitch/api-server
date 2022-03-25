# api-server

[Heroku Deployment](https://api-server-practice.herokuapp.com/) \
[Recent Pull Requests](https://github.com/Zavvy-Glitch/api-server/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Aclosed)

## Installation:
  - Once cloned to your local machine with `GIT`
    - run these commands
      - `npm init -y` <- this will auto populate node_modules / package.json files 
      - sequelize
      - sqlite3
      - express
  - Once installed go into your package.json file and ensure the following show in your dependencies and scripts 
  ![scripts](https://user-images.githubusercontent.com/84699682/160034122-5c93d96f-fa39-4ccf-ab9a-dc5b32746a49.JPG)

## Usage:
  - With jest installed you'll be able to run the current test suite coded.
    - Run this command `npm test` in your terminal. (Ensure you're in a location within the directory that it can find the test files. I currently have them in the outer most scope)

## Contributors / Authors:
  - Chattray Chea

## Features / Routes:
  - Currently the application is supplied with CRUD routes to be able to `CREATE`, `READ`, `UPDATE`, `DELETE` consumer and clothing collections.
  - There has been an interface created to allow assimilation of routes from both collections.
