# Pollaris Surveys API
### Back-End

Pollaris Surveys is Full Stack Web Application developed as a group project by the following Sofware Engineers:
[Ash Grevelink](https://github.com/hashbangash),
[Ethan Strominger](https://github.com/ethanstrominger),
[Tukrong Klengdong](https://github.com/tukrong),
[Patricia Antlitz](https://github.com/patybn3).

The Front-End repository of this app is stored at [Pollaris Surveys Client - Front-End](https://github.com/wat-the-duck/pollaris-surveys-client/tree/development).
And its version was deployd to [Heroku](https://mighty-retreat-69793.herokuapp.com/surveys).
This application can be viewd and tested [HERE](https://wat-the-duck.github.io/pollaris-surveys-client/)

## Objectives:

To create a fully functional application that allows an authenticated user to create, edit and delete surveys. Surveys should be available to all authenticated users but should only be edited or deleted by the owner/creator. Allow the application to keep track of the answers in a survey. User should not use their personal email and password when using this application. This app takes any email in the format email@email or email@email.com and any password.

## Dependencies

- [API template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template)


## Set Up
### (on master branch)

- `npm install`
- `npm install -g nodemon`
- `npm run server`
- `heroku create`
- `git push heroku master`
- `heroku addons:create mongolab:sandbox`
- The first time you create a mongolab sandbox you might get the following message:
  - `Creating mongolab:sandbox on ⬢ pacific-cliffs-91276... !
 ▸    Please verify your account to install this add-on plan (please enter a credit card) For more information, see
 ▸    https://devcenter.heroku.com/categories/billing Verify now at https://heroku.com/verify`
- Make sure to copy the link and paste it on your preferred browser following the instructions to continue. Once this step is completed the message will update to something like this:
  - `$ heroku addons:create mongolab:sandbox
Creating mongolab:sandbox on ⬢ pacific-cliffs-91... free
Welcome to mLab.  Your new subscription is being created and will be available
shortly. Please consult the mLab Add-on Admin UI to check on its progress.
Created mongolab-cubed-11237 as MONGODB_URI
Use heroku addons:docs mongolab to view documentation`
- CLIENT_ORIGIN: `heroku config:set CLIENT_ORIGIN="https://<% github username %>.github.io"`
- `heroku restart`
- `heroku open`

## Manual Testing
- From Browser, enter http://localhost:4741/examples to see if its working, it should say unauthorized.
- Postman scripts are located in postman-scripts directory.
  - Create or select an existing environment (anything except no environment)
  - Scripts that require authorization use the token defined at sign in
  - Scripts that require a survey id (SHOW, DEELETE, UPDATE) use the survey_id for last object created by CREATE script.  To customize to use a specific survey_id, change {{survey_id}} in the URL to the desired survey_id.

## Requirements

  The front-end and back-end of this application must be built as a group. Both front-end and back-end are to be stored in a public GitHub account, this project was added to the organization Wat-the-duck and made public. A project must be created under the organization and access should be given to all members. Tickets must be created often, added to a to-do list, moved to "in process" list while is being worked on and closed once a related commit is pushed from the local repository to the remote repository. Tickets are to be used to communicate with the other members of the team on what needs to be done and are to be assigned to one (or more) members of the team.

  The back-end of this application should use Heroku as a server. Changes made are to be committed and deployed to both GitHub repositories and heroku, often, to keep records up to date. Pull requests are to be reviewed by at least one member of the team before merging into the main branch (not master). This project uses a branch called development as the main branch. All features were added using feature branches which were merged, rebased and deleted once the feature was completed.

  Commit:

  At least one commit per Developer a day. Commits message must be detailed, must include the ticket numbers it is related to and should reference the name of any Developer who also worked on the feature.

## Technology Used:

1. MongoDB NoSQL.
2. Express.js.
3. Mongoose.
4. GitHub.
5. Git.
6. Heroku.
7. JavaScript.
8. Node.js:
   1. Passport (for authentication).
   2. bcrypt (cryptography).
   3. CORS.
   4. dotenv (environment management).
   5. jsonwebtoken.

Refer to the front-end of this application mentioned above for the list of technologies used to build the front-end.

## ERD

![IMG_3829](https://user-images.githubusercontent.com/22508682/76443897-83c39300-6399-11ea-8003-48b68074fa80.jpg)

## Planning

1. One person:
  - [X] Download api template and push
  - [X] Deploy to heroku
  - [X] Download UI template and push
  - [X] Deploy to heroku
- [X] API Sign up, sign in
- [X] UI Sign up, sign in
2. Each team member
  - [X] Clones repos
- [X] Survey API CRUD for resource with no options
- [X] Survey UI CRUD for resource with no options
- [X] Survey API CRUD for resource with options

Work in three groups on UI.  When someone is ready to push to feature,
then do the pull request as a group.  Then, everybody rebases and
resolves any conflicts, also as a group.  Rebase will merge any changes.

3.
- [X] Survey UI CRUD for resource with options
    - [X] CREATE
        - [X] Suggestion: Do a reset so can create a new item
    - [X] INDEX - List all surveys, my surveys
    - [X] SHOW/UPDATE of options
    - [X] DELETE
- [X] Take Survey
    - [X] API
    - [X] UI
- [X] UI - Handle errors
- [X] UI - Only appropriate buttons appear
- [X] Review checklist

## Unsolved Problems

None

## Future Plans
Click [here](https://github.com/orgs/wat-the-duck/projects/1?card_filter_query=label%3Afuture) to see issues marked as "Future"
