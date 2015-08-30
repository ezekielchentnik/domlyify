# domlyify
DOMly precompiler plugin for Browserify

## Installation

    npm install domlyify

## Usage

This module is meant to be used together with
[browserify](http://browserify.org)

Example `example.js`:

    var template = require('./example-template.html');

    template({title: 'example'});

Example `example-template.html`:

    <h1>{{data.title}}</h1>

### Compile Options

This plugin can give DOMly's compile options.

    browserify -t [ domlyify --stripWhitespace true ] example.js

You can also configure it in package.json

```json
{
    "name": "example-package",
    "browserify": {
        "transform": [
            [ "domlyify", {"stripWhitespace": true } ],
        ]
    }
}

#### Available option

...

### With gulp.js

...

### With grunt.js

...

## Tests

    npm test

## Author

Ezekiel Chentnik

