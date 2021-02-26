# Minimalistic Fast Website

## Problem Statement

* I wanted a simple website as the root of my domain. This needs to load as fast as it can without any bloat. 
* The purpose of this root website is to direct the users into my various projects and articles
* This will be hosted on my home server. So every byte, every style, every transformation counts.
* Needs to be mobile first and fully responsive
* Modern design
* Should work reasonably well with at least 80% of current web browser versions [caniuse](https://caniuse.com/)

## Approaches

1. My first attempt was to start with a boilerplate. I tried with [Material Design](https://material.io/design)
   - I came across so many compatibility issues with their provided boilerplates
   - I couldn't use the latest versions of the modules I wanted
   - There were good examples to incorporate into frameworks but I wanted a minimalist approach
   
2. Start from scratch
   - I decided to start from scratch. 
   
## Lets begin

### Decisions

1. Module bundler loader [webpack](https://webpack.js.org/concepts/)
2. JS compiler for compatibility [Babel](https://babeljs.io/)
3. CSS preprocessor [Dart Sass](https://sass-lang.com/dart-sass)

Lets begin...

### Versions

Everything eventually gets outdated. At the time of creation the versions are,

* OS [Arch Linux x86_64 with kernel 5.11.1-arch1-1]
* Node v15.10.0
* npm 6.14.11
* webpack 5.24.2
* webpack-cli 4.5.0
* Material 10.0.0