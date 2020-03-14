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
  - Create or select an existing environment (anything except no environment)
  - Scripts that require authorization use the token defined at sign in
  - Scripts that require a survey id (SHOW, DEELETE, UPDATE) use the survey_id for last object created by CREATE script.  To customize to use a specific survey_id, change {{survey_id}} in the URL to the desired survey_id.
