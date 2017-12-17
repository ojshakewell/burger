# Hamburgers!
A restaurant app that lets users input the names of burgers they'd like to eat.
Visit Heroku deployment here: https://glacial-springs-24806.herokuapp.com/

*This App demonstrates the the use of MySQL, Node, Express, Handlebars deployed with Heroku
*Users can enter the name of a hamburger and a new record is created in the database, it is displayed in the left column.
*When the burger is eaten, the database record is modified and it is displayed in the right column.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To begin with, you'll need a git repository initialized locally with your basic web server code working and committed.

1. There are a couple of ways to do this. 
   * If you cloned from a remote repository and then wrote/committed your code to the local clone, you should be set and can skip these steps and go straight to deploying.
   * If you haven't set up a git repository for your files yet (or didn't clone), proceed to the next step.

2. Run `git init` locally in the folder with your web server files.
   * If you want to also push to GitHub in addition to hosting on Heroku (recommended), you can follow the [Adding Existing Projects to GitHub through the command line Guide](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

3. Commit all changes (if you haven't already with the above steps) using `git add .` and `git commit -am "<message>"`. If you haven't run into any errors at this point, you should be able to proceed to the next section. 
   * You may also want to create a `.gitignore` file if you don't have one already. This file will allow you to tell git to not track files such as those in the `node_modules` folder.
   * The [GitHub gitignore Documentation](https://help.github.com/articles/ignoring-files/) and this [node gitignore example](https://github.com/github/gitignore/blob/master/Node.gitignore) are useful resources for this, though it is pretty much as simple as:
     1. Before you commit, create a file called `.gitignore`. Inside of that file, add `node_modules/` as the first line and save the file. Now, git should no longer track `node_modules` files.

## Deployment

Log in to Heroku.
   * If you are a windows user open the cmd.exe (NOT Git Bash) and type `heroku login`. Keep this command prompt open in the background. Then, open Git Bash and navigate to the folder with your code.

   * If you are a mac open terminal and type the command `heroku login`. Enter your Heroku credentials and proceed with all the below steps in terminal. Navigate to the folder with your code.

2. Run the command: `git remote –v` .
   * This is to show you that right now, you do not have heroku listed as a remote repository.

3. Run the command `heroku create`.
   * This will create an app instance on the Heroku server and will add heroku as a remote for your local git repository.

4. Run `git remote –v` again.
   * This isn't necessary, but helps to confirm that Heroku is now in your list of remotes. This time you should see the `heroku` remote.

5. Ensure that your `package.json` file is set up correctly. It must have a `start` script and all dependencies defined. E.g.:
   ```json
   {
     "name": "starwars",
     "version": "1.0.0",
     "description": "Helps you find the characters you are looking for",
     "main": "server.js",
     "dependencies": {
       "body-parser": "^1.15.0",
       "express": "^4.13.4"
     },
     "scripts": {
       "start": "node server.js"
     }
   }
   ```

6. Ensure your web server is starting with a dynamic port.
   * For an express app, the code for this would look like:
   ```js
   var port = process.env.PORT || 3000;
   ...
   app.listen(port, function() {
   ```
   * This allows you to get the port from the bound environment variable (using `process.env.PORT`) if it exists, so that when your app starts on heroku's machine it will start listening on the appropriate port.
   * You app will still run on port 3000 locally if you haven't set an environment variable.

7. Commit any changes you've made up until this point using `git commit -am "<message>"`

8. Run the command `git push heroku master`. A series of processes will be initiated. Once the process is complete note the name of the app.

9. Log in to your Heroku account at www.heroku.com . You will see a list or a (single) app. Note the one that has the same funky name as you saw in bash. Click on it.

10. Click on settings. Then, scroll down until you see the part that says: "Domains". Note the URL listed under Heroku Domain.

11. Finally, go in your browser to the URL listed under the Heroku Domain. If all went well you should see your website!

## Built With

* Javascript
* jQuery
* Bootstrap
* MySQL
* Heroku
* JawsDB

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Brian Russell** - *Initial work* - [ojshakewell](https://github.com/ojshakewell)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* **Billie Thompson** - *README-Template.md* - [PurpleBooth](https://github.com/PurpleBooth)
