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

#### Redoing Lesson

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
