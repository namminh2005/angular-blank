# angular-blank project

Blank project Angular 1.x.x mixed with requiredJS

## Getting Started

To get you started you can simply clone the angular-blank repository and install the dependencies:

### Prerequisites

1. Nodejs:                [http://nodejs.org/](http://nodejs.org/)
2. Git:                   [http://git-scm.com/](http://git-scm.com/)

### Text Editor:

1. Sublime text           [https://www.sublimetext.com/](https://www.sublimetext.com/)
2. Visual Studio Code     [https://code.visualstudio.com/](https://code.visualstudio.com/)

### Clone angular-blank project

Clone the angular repository using [git][git]:

```
git clone https://github.com/namminh2005/angular-blank.git
```

### Install Dependencies

Type on your command line:

```
npm install
```

You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

### Run the Application

Type on your command line:

```
npm start
```

Now browse to the app at `http://localhost:8000/app`.

## Directory Layout

```
app/                                            --> all of the source files for the application
      | --- assets/               
      | --- bower_components/                         
      | --- components/                               
      | --- modules/
            | --- base/
                  | --- appConst.js
                  | --- appService.js
                  | --- appUrl.js
                  | --- appUtil.js
                  | --- module.js
            | --- home/
                  | --- config.js
                  | --- home.html
                  | --- homeCtrl.js
                  |--- module.js
            | --- layout/
                  | --- partials/
                        | --- footer.tpl.html
                        | --- header.tpl.html
                        | --- navigation.tpl.html
                  | --- config.js
                  | --- layout.tpl.html
                  | --- module.js
                  | --- rootCtrl.js
      | --- appConfig.js
      | --- index.html
      | --- main.js
      | --- rconfig.js
built/
      | --- assets/
      | --- app-combined.[encode].js
      | --- app.min.[encode].css
      | --- index.html
e2e-tests
node_modules
appfile.json
bower.json
Gruntfile.js
package.json
```

### How to build angular-blank project

Type on your command line:

```
npm run production
```

And you will see directory 'built/' will appear.

## Testing

Waiting

### Running Unit Tests

Waiting

### End to end testing

Waiting

## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
