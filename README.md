# Pollaris
### Back-End

## Dependencies

- [API template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template)


## Set Up

- `npm install`
- `npm install -g nodemon`
- `npm run server`

## Manual Testing
- From Browser, enter http://localhost:4741/examples to see if its working, it should say unauthorized.
- Postman scripts are located in postman-scripts directory.
  - You will need to sign up, sign in, and copy the token from sign in
  - Set Bearer token in AUTHORIZATION for GET, SHOW, DELETE, CREATE, and UPDATE
  - Create a record
  - Note ID in body
  - Change URL id that comes after / in SHOW and DELETE
