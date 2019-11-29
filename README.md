## Content

This app currently has a working login page that will persist across the app.

The router is set up so routing will be automatically handled depending on the current logged in state of the user.

## Notes

- Project currently isn't strongly typed 100% - some cases of the react framework don't support typing and / or are not documented very well.

- Fetch client needs to be updated for types - currently only accepts one type and expects to get the same type back
    - This may not always be the case which you can see from the login request and response

## Run
`npm start` or `yarn start`

**To login you will need to have the ZenAuto app server running - use the following credentials: username - `david` password - `password`**

- If this doens't work, go to the `src/services/config.ts` file to configure the endpoint for the api.
