# SugarCRM 7.* Developer Gruntfile

This is a script for Grunt.js - You need node, npm and grunt-cli installed

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
Will watch your `custom/modules` directory for changes of .js files in the `clients` directories. On change it will lint them using `jshint` and clear `cache/javasripts/base`, `cache/api` and `cache/modules` so on the next request all javascript and metadata will be rebuilt!

```
grunt fixperms
```
This can be run seperately to fix permissions on the Sugar installation (this is run automatically when .js files are changed)
