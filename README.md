# SugarCRM 7.* Developer Gruntfile

This is a script for Grunt.js - You need `node`, `npm` and `grunt-cli` installed

http://gruntjs.com/getting-started

## Installation

Copy `package.json` and `Gruntfile.js` to the root of your sugar installation and run:

```
npm install
```

Edit `Gruntfile.js` and change `fixpermsUser` to your web server user and `fixpermsGroup` to a developers group (useful if multiple users are going to be working on the project)

## Tasks

```
grunt watch
```
This will watch your `custom/modules` directory for changes of .js files in the `clients` directories. On change it will lint them using `jshint` and clear `cache/javasripts/base`, `cache/api` and `cache/modules` so on the next request all javascript and metadata will be rebuilt!

You will be alerted on any errors that occur during the process so you can just leave it running in the background - This works using Growl for OS X or Windows, Mountain Lion and Mavericks Notification Center, and Notify-Send for Linux

```
grunt fixperms
```
This can be run seperately to fix permissions on the Sugar installation (this is run automatically when .js files are changed)

> Note - Remember to add the following to your .gitignore if using git:
> * /node_modules
> * /package.json
> * /Gruntfile.js
