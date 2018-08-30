# PersonAffix 

[Demo](https://schriker.github.io/personaffix/)

Simple vanillajs script to affix elements on page. No jQuery needed. 

## Download
* [personaffix-v1.0.0](https://github.com/schriker/personaffix/releases)

## Install
From ../docs/ folder grab two files:

* person.min.js
* person.min.css

And include them in your project:

```html
<link rel="stylesheet" href="person.min.css">
<script src="person.min.js"></script>
```

## Usage
Basic usage:
```javascript
var affix = new Person.Affix(".classNameOfElement");
```

## Options[Object]
You can pass options when creating new Person.Affix:
```javascript
var affix = new Person.Affix(".classNameOfElement", {
	//options goes here, you can pass one option or all at once.
});
```

By default Person.Affix use options[Object] like so:
```javascript
        const defaultOptions = {
            topOffset: 0, 
            topDelay: 0, 
            className: "affix", 
            stopElement: null, /
            onScrollBack: false, 
            callback: null
        };
```

* [Number]topOffset: 0 - Pixels from top of page to affix element.
* [Number]topDelay: 0 - Pixels to scroll down before affix element.
* [String]className: "affix" - CSS class name to add after affixed.
* [String]stopElement: null - CSS class of stopper element.
* [Boolean]onScrollBack: false - Affix only on scroll to top?
* [Function]callback: null - Callback function when affixed.

Check the [Demo](https://schriker.github.io/personaffix/) page to see the examples.

## Modifying source
To change source first install all dependencies by running :
`npm install`	

To start server:
`npm run start`

To build project run:
`npm run build`