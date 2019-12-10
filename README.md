# PGVote
## Introduction
PGVote is a simple web app built on HTML/CSS/JS with NodeJS and Express middleware. Its purpose is to allow PG residents or students attending UMD to find the polling place closest to their address.
### Heroku
The Heroku is hosted at https://pgcounty-vote.herokuapp.com/
### Target Browser
Our web app is built to be responsive and should adapt to any browser width or height.
### User Manual
If you are looking to learn how to use our web app, [click here](./docs/user.md) for the User Manual.
### Developer Manual
If you are looking to documentation for our web app, [click here](##Documentation)
## Documentation
Welcome to the documentation section of our README! This should guide you, a future developer on our application, through the nooks and crannies of our web app!
### Onboarding
If you are new to npm, node.js, or even Git, this is the place for you! Here you will find what you need as a developer when you've just cloned this repository from Github.
1. If you have not installed node.js, [click here](https://nodejs.org/en/) to download node.js. When you install node.js it automatically installs npm along with it so don't worry about it!
2. If you have not installed git, [click here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for a guide on installing git on various machines!
3. After installing Git, node.js, and npm, open your gitbash console and navigate to your repository.
```
cd {insert repository name here}
```
4. When you're in the main directory of our repository, run the following command
```
npm i
```
5. Once you've installed all of the packages necessary for our web app, run the following command and your application should be running on localhost:3000! (Unless you have a separate application running on the port 3000.)
```
npm run start
```
6. Once you've got the repository running, you have to be aware of branching and pull requests, [this link](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) should explain basic branching and merging, and [this document](./docs/pull-requests.md) should help you make your first pull request in our Github repository!
### Dependencies
The dependencies that our project rely on are listed within the "devDependencies" and "dependencies" section within the package.json. The "devDependencies" section outlines dependencies that are necessary for development and build processes within our project, while the "dependencies" section outline the dependencies necessary for our application to function.
### Main Project Structure
> ### /docs
Contains all of the supporting documents of our project.
> ### /build
Contains the development version of our application.
> ### /src
Contains the production version of our application.
#### Substructure for /build & /src
> #### /css
Contains all of the styling for our HTML.
> #### /dist
Contains the bundled JS files from webpack.
> #### /js
Contains all of the JavaScript for our HTML.
> #### static
Contains all of the static files (images) for our HTML.
> #### *.html
All of the HTML files reside within the root of the repository.
> ### .eslintrc.json
Contains all of the rules that our JS files follow.
> ### .gitignore
Contains all of the files to ignore from commits and pushes from local repositories.
> ### favicon.ico
Determines the icon that represents the web application in a browser tab.
> ### package.json
Describes the project, its scripts, and dependencies.
> ### server.js
The entry point for the application and contains all of the code for starting the Node.js server.
### API
The GET endpoint by `'/api/polling'` that pulls the data from the PG county open API.
<br>

The POST endpoint by `'/api/calculate'` that takes the data from PG county open API and then creates new data housing the closest distance, closest location, and the current location reverse geocoded.
<br>

The PUT endpoint by `'/api/distance'` that returns the data calculated by the POST endpoint.
### Known Bugs
#### Unexpected end of JSON output
Sometimes the application will send this response within the console, however there is just a problem within our promise chain and our data handling, this is something that we are aware of and will move forward to fix.
#### UI handling for geolocation services
We did not put any handling for when the user accidently hits no on the geolocation request, so that needs to be implemented.
### Future Roadmap
1. Add handling on the UI end for geolocation services
2. Separate JS from HTML and add Webpack, Gulp, and Babel for bundling JS files
3. Remove API from `server.js` and abstract into controllers, models, and routers.
4. Combine all CSS into `style.css`.
5. Migrate to Sass for better maintainability.
6. Integrate MongoDB instead of using localStorage.
7. Separate `server.js` and create abstraction into `app.js`.