## `Setup Code`

1. Create .env from .env-example file and provide your database connection string. e.g: DATABASE_URL=postgres://postgres:password@localhost:5432/dbname
2. Run below command

### `npm init`

This will create tables and fill the data in it. 

### `npm dev`

This will run both experss and react server simultaneously. 
Open React side at http://localhost:3000
Open Express server on http://localhost:4000
### `npm start`

Start server on production.
### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
