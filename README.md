# Deskbookers Front-end Developer Expert Test

Hi Front-ender!

To further test your skills we like you to make a few assignments. We hope you like making them and ofcourse do them well ;)

To complete these assignments you need to fork this repo. When you're done you can push your changes to your own repo (and let us know where to find it ofcourse).

It is possible that these assignments don't work directly from your local hard drive in some browsers. In that case you can use your own web server (if you have one) or use XAMP (https://www.apachefriends.org/index.html) to install your own.

## Assignment 1: Show Search Results

In this assignment you need to make an Ajax request and show the results on a web page. What you will be showing are search results of our search page. Because of limited time you will only show the results. You don't have to make the search form or filters.

The data for the search results can be found as JSON from the URL: https://www.deskbookers.com/nl-nl/sajax.json?q=Amsterdam&type=-&people=any&favorite=0&pid=&sw=52.293753%2C4.634942&ne=52.455562%2C5.162286&ids=17201%2C19640%2C13692%2C13691%2C12136%2C17938%2C15292%2C14886%2C14885%2C14884%2C14883%2C15730%2C15353%2C15351%2C15330%2C15080%2C17290%2C15454%2C15451%2C15379

For this assignment you need to make a page containing the following elements:

* A map (Google Maps for example) showing the items from the result
* A list showing the items from the result with at least the following data visible:
  * The name of the space
  * The name of the venue (location)
  * The city where the space is located
  * Extra data you think is usefull to show aswell

It is up to you to decide which frameworks you want to use (or not). You could think of frameworks like Angular, jQuery, ReactJS, etc. It is up to you.

As inspiration you can use this page: https://www.deskbookers.com/nl-nl/search?s=home-big&pid=ChIJVXealLU_xkcRja_At0z9AGY&q=Amsterdam&type=&lat=52.3702157&lng=4.895167900000001
Your version doesn't need to be as extensive as this example.

Make sure the code is clean and robust. This is more important than the amount of features!

# frontend-expert-test

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.7.5.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
