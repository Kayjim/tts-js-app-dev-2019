# Lesson 15 - React Intro

## Recap & Intro
- We've come a long way! We've learned
	- JavaScript Basics
	- Browser & DOM
	- API's and Async
	- Application Setup & Compilation
- At this point we have all the concepts we need
- Today, we learn about React!
- More Specifically, we'll be covering
	- What React is (and is not) 
	- Core Concepts
	- React Setup and Configuration
	- React Components
	- JSX
	- Component State (`this.state = {}`)
	- React CLI

## What is React?

- Open source view framework developed by Facebook
- React lets you define interfaces in JavaScript
- React can render anywhere to anything
- Simple, powerful, and composable

## What React Isn't
- React is not a web framework (not tied to html/css). 
- React isn't a full fledged application framework
- React is not Flux or Redux

## Core concepts

### Components
Everything in React is a component. Think of a component as a custom html tag that renders its own interface and comes packaged with its own behavior (click events, etc)

Another way to view a React component is to think of it as a module.


### Virtual DOM
When you render a React component, React creates a JavaScript representation of the DOM. This is called the "Virtual DOM"<br>
Another way of looking at this... React renders a virtual representation of the interface in memory. <br>
React then uses any number of open source plugins to render the virtual DOM state to an interface like the real DOM, a canvas, or a native mobile app.

### ReactDOM
The library we'll be using to render React components to an HTML document is called reactDOM. *_ReactDOM converts your React state to HTML_*. It manages the HTML and event handlers for you so that subsequent renderings of your application make the fewest possible changes to the actual DOM, increasing performance.

**Important** - React abstracts away the DOM interface. You're not really writing HTML.

### JSX
Most React code is written in a superset of JavaScript called JSX. It lets you create components in your JS code in a way that looks more familiar (like HTML). Keep in mind, this IS NOT HTML. It's also not really JS. It needs to be compiled by babel (through webpack) into a `.js` file that a browser can read.

## Setting up your first React application

Due to the fact that React is not a framework, we'll first need to start by configuring our application to use React

Most of this will be a standard webpack configuration that you've been using for the last couple of weeks, with a few new modules for react. 

#### _Step 1_

create your project and initialize npm 

```bash
$ mkdir hello_react
```

```bash
$ cd hello_react
```

```bash
$ npm init
```

#### _Step 2_

install React and React DOM

```bash
$ npm i react react-dom --save
```

We'll be saving React and ReactDOM to use throughout our project. These are 2 separate modules because React can be used for more than just the web. 

#### _Step 3_

Install Webpack and Babel 

```bash
$ npm install --save-dev html-webpack-plugin webpack@4.28.3 webpack-dev-server@3.1.14 webpack-cli@3.3.0 react-scripts
```

```bash
$ npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 babel-preset-react-hmre babel-core @babel/core
```

In this step, we have installed webpack and 2 plugins:<br>
	- webpack-dev-server
	- html-webpack-plugin
We have also installed the necessary modules for babel
	- babel-core (babel)
	- babel-loader (loader for webpack)
	- babel-preset-react (react/jsx transpilation)
	- babel-preset-es2015 (ES6 transpilation)
	- babel-preset-react-hmre (hot module reloading for react components)

*note: this command can be run all at once as well*

#### _Step 4_

Configure Babel

```bash
$ touch .babelrc
```

In your `.babelrc` file add your presets (for transpilation)

```javascript
{
  "presets": ["react", "es2015", "react-hmre"]
}
```

We are adding the presets for babel to properly compile/transpile our `jsx` and es6. We've also added `react-hmre` for React Hot Module reloading. 

#### _Step 5_

Before configuring wepback, lets go ahead and add our app directory 

```bash
$ mkdir app
```

```bash
$ touch app/index.html
```

```bash
$ touch app/index.jsx
```

You'll notice we've created `index.jsx` instead of `index.js`, this is the file extension we'll be using for our React Components. 

#### _Step 6_

Configure Webpack

```bash
$ touch webpack.config.js
```

```javascript
var webpack = require('webpack') // create a variable for accessing webpack inside the object below
var HtmlWebpackPlugin = require('html-webpack-plugin'); // pull in the html-webpack-plugin module

module.exports = {
  entry: [
  'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './app/index' // App entry point
  ],
  output: {
    path: __dirname + 'dist',
    filename: 'index.js'
  },

  module: {
    rules: [
      { test: [/\.js$/,/\.jsx$/], exclude: /node_modules/, loader: 'babel' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // resolve all js extensions
  },

   devServer: {
    port: 3000,
    contentBase: './dist'
  },

  plugins: [
    // Use HTML webpack plugin to generate a template from ./app/index.html
    new HtmlWebpackPlugin({
     filename: 'index.html',
     template: './app/index.html',
     inject: 'body'
   }),
    new webpack.HotModuleReplacementPlugin() // use Hot Module Replacement for React components
  ]
};

```

You'll notice that this webpack config has a few new additions, please see the comments for an explation of the new items. 

The major difference is that we are going to utilize hot-module-replacement for instant reloading of components when a file is saved. 

We have also added the Html Webpack Plugin to create an html template from `app/index.html`. This will allow webpack to create a `dist` directory on the fly and link the appropriate bundled output (from webpack) in the body.

#### _Step 7_

in `app/index.html` add basic html with a 'root' div

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello React!</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

in `app/index.jsx` add some basic JS

```javascript
document.getElementById('root').innerHTML = "<h1>Hello World</h1>"
```

#### _Step 8_

Add your start script and run it. 

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "react-scripts start"
  },
```

```bash
$ npm start
```

*note: this is a basic application setup for development use only. For more robust react configurations, checkout [React Start Project](http://andrewhfarmer.com/starter-project/) and [create-react-app](https://github.com/facebookincubator/create-react-app)*

## Defining & Rendering Components

Now that we've setup our application 
Let's define our first component.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return (
    	<div>Hello World</div>
    );
  }
}
var mountPoint = document.querySelector('#root');

ReactDOM.render(<HelloMessage/>, mountPoint);

```

A few things to note:

- We are importing React and ReactDOM separately.
- We are using ES6 class syntax to define a new component class that inherits from React's default component
- We are defining a `render` method, which is the only method required to define a component class.
- The render method returns a React component. Use parens to allow multi-line component definitions, and make sure you're returning a single root component. The root component can have children, but not siblings.
- We are using ReactDOM to render an *instance* of our class to an element on the html document.

### JSX Caveats
Like we said before, JSX isn't really HTML. Because it lives in the same context as JavaScript, it has some special rules you need to follow when returning components from your render method.

- Attributes with the same names as reserved JS keywords can't be used. For example `class` and `for` are changed to `className` and `htmlFor` in JSX.
- All tags have to be closed. `<input type="text">` for example, has to include a closing tag `<input type="text" />`.

## Exercise 1: Rendering a Simple Component
Let's create our first component! 

1. Clone the boilerplate project from the repo we just created 
2. In index.jsx, create a component class called `MessageInput` that renders:
	1. A text input called
	2. A label for the text input (clicking it should focus the input)
	3. A 'send' button
3. Render an instance of your component to the DOM.

## Making our JSX Dynamic
Let's take a deeper look at the render method. This is essentially the equivalant of our view template in other frameworks (ejs, handlebars, mustache, jade, haml, etc.).

The basic functionality needed in any templating language is 

1. Token Replacement
2. Conditions
3. Iteration

Let's take a look at how we do that in JSX.

### State
Before we make our templates dynamic we need data to drive them. The data that components need to render is kept in a special property object called `state`.

Before we discuss state further, let's take a look at the syntax. 

```javascript
class HelloMessage extends React.Component {

  constructor() {
    super(); //needed for inheritance
    
    //Define an intial state object
    this.state = {
  		message : 'Hello World!'
  	};
  }

  render() {
    return (
    	<div>Hello World</div>
    );
  }
}
```

As you can see above, `this.state` is an object, defined within the class constructor method. Meaning that you'll use the constructor method to define the component's state object.

Now that we have data, we can start making our templates dynamic.

### Token Replacement

You'll notice above that nothing really happened. <br> 
In order to populate our component with values from the state, we will need to use *token replacement*

*Token replacement* is simply taking variables and putting their value into the template. In JSX, use `{}` (curly braces) with the desired value:

```javascript
// this.state = { message : 'Hello World!'};
render() {
	return (
		<div>{this.state.message}</div>
	);
}
```

***note: tokens don't have to come exlusively from state. They can be calculated. e.g.***

```javascript
// ...
render() {
	var statement = "message is: " + this.state.message;
	return (
		<div>{statement}</div>
	);
}
// ...
```

According to [The React Documentation on State](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#components-are-just-state-machines): 
> React thinks of UIs as simple state machines. By thinking of a UI as being in various states and rendering those states, it's easy to keep your UI consistent.

> In React, you simply update a component's state, and then render a new UI based on this new state. React takes care of updating the DOM for you in the most efficient way.


### Conditions
Often times we want to render one thing in one case, and something else in another case. There are a couple of ways to do this with JSX

#### Use JavaScript!

```javascript
// ...
// this.state = { person : 'Matt'};

render() {
	
	//Figure out the elements in advance
	if(this.state.person)
		message = "Hello " + this.state.person;
	else
		message = "I'm all alone... and sad";
	
	return (
		<div>{message}</div>
	);
}
// ...
```

### Inline
If you prefer an inline look to your template, remember, you can run functions inside those curly braces. Use an IIFE to generate the value you want

```javascript
render() {
	return (
		<div>
			{(() => {
	       	if(person)
					return "Hello " + this.state.person;
				else
					return "I'm all alone... and sad";
	      	})()}
		</div>
	);
}
```

### Iterative Rendering

Sometimes you want to render the same elements repeatedly for every item in an array. JSX lets you put an array of components inside the `{}` for rendering. 

All you have to do is create it based on the data you want to render.

```javascript
//this.state = { studentNames: ['Matt', 'Katy', 'Mariel', 'Lee'] }

render() {	
	//Figure out the elements in advance
	var students = this.state.studentNames.map(function(name, i){
		return (<li key={i}>{name}</li>)
	})
	
	return (
		<ul>{students}</ul>
	);
}
// ...
```

Something to note above is the use of the `key` property. 

According to the [React - *Special Non-DOM Attributes* Documentation](https://facebook.github.io/react/docs/special-non-dom-attributes.html), `key` is: 

> An optional, unique identifier. <br>
> When your component shuffles around during `render` passes, it might be destroyed and recreated due to the diff algorithm.<br>
> Assigning it a `key` that persists makes sure the component stays.


In other words, for React to keep track of (and properly update) dynamically generated elements, you must give items a ***unique key***


## Dynamic Class Names

One of the most common dynamic elements is the list of classes an element has applied. The simple way to do this is to use javascript logic to concat a string.

```javascript
// ...
//this.state = {active: true}

render() {
	var classes = 'item'
	
	if(isActive) {
		classes += 'active';
	}
	
		
	return (
		<div className={classes}></div>
	);
}
// ...
```

A better approach is to use the [classnames](https://github.com/JedWatson/classnames) module

```javascript
import classNames from 'classnames';
// ...

render() {
	var classes = classNames({
		'item' : true,
		'active' : isActive
	})	
		
	return (
		<div className={classes}></div>
	);
}

// ...

```

## Inline styles

Because React brings HTML, CSS, and JS into the same context, you can use POJOs(Plain old JavaScript Objects) as styles for your components!

```javascript
render() {
	var headerStyle = {
		color: 'red',
		textDecoration: 'underline'
	}
		
	return (
		<h1 style={headerStyle}></h1>
	);
}
```

You can define styles in another module and import them.

## Exercise 2: Rendering Components with Logic

Let's add some logic to our little component.

1. Declare an array of message objects with properties for 
	- `text` 
	- `time`
	- `user`
2. Add a `ul` with an `li` element for each message containing the 
	- message
	- user's name 
	- timestamp
3. Declare a variable `currentUser`  
	- set it to one of the users in the messages array
4. If a message's author is the `currentUser` 
	- add a class to it that turns the message red.
5. Only show the most recent 3 messages.
6. If there are more than 3 messages, show a "load more" button

## Create React App (React CLI)

One of the hardest parts of building a React App is the initial setup.<br>
Recently, several well known JS and React developers created a command line utility for Initial App configuration. 

You can find the documentation for using create-react-app [here](https://github.com/facebookincubator/create-react-app)

Let's run through a quick build with this new tool. 

```bash
$ npm install -g create-react-app
```
```bash
$ create-react-app my-app
$ cd my-app/
$ npm start
```

Navigate to [localhost:3000](http://localhost:3000) and you'll see a starter page with instructions on how to move forward. 



## Homework 


- Read and Review the Class Notes from [React Intro](#lesson-14---react) specifically: 
  - [Iterative Rendering](#iterative-rendering)
  - [Dynamic Class Names](#dynamic-class-names)
  - [Inline Styles](#inline-styles)
- READ the documentation at [Create React App](https://github.com/facebookincubator/create-react-app)
- Create a new Application (with create react app) named `react_message_YOUR_INITIALS_HERE`
	- Complete Exercises [#1](#exercise-1-rendering-a-simple-component) and [#2](#exercise-2-rendering-components-with-logic) in your newly created app
	- push the completed code to GitHub
	

## Reading 

- [React Getting Started Documentation](https://facebook.github.io/react/docs/getting-started.html)
- [React and the economics of dynamic web interfaces](https://www.nczonline.net/blog/2016/01/react-and-the-economics-of-dynamic-web-interfaces/)
- [React Starter](https://github.com/eanplatter/react-starter)
