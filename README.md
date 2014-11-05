
angular-collapse
================

The trick is simple. Wrap the content with a zero height div, hide it with absolute positioning, change the height, and wait the browser to use CSS3 transition to finish the trick.

Requirements: AngularJS 1.0.0+

## Usage

1. list 'angular-collapse' as a dependency for you app.

```js
angular.module('myApp', ['angular-collapse'])
```

2. inclue the supplied CSS file (or merge them within your own).

## Why I created this

This is really a simple and basic requirement, that has a solution already in Bootstrap. But I found no one available around for Angular, or maybe it's too small to be a standalone module.

## License

MIT
