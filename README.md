## Installation

```sh
# clone this repository
git clone git@github.com:mrYodak/MortgageCalculator.git

# run the setup script
npm run setup

# if the setup script fails:
# install dependencies in both sub-projects
npm ci
npm ci --prefix client/

### Other Dependencies

You will also need:
  - The [Vue CLI](https://cli.vuejs.org/) installed

## Development

To run type in different terminals:

```sh
# Start the Express application with reloading via nodemon
npm run dev:server

# Start the Vue application with HMR and Reloading
npm run dev:client
```
