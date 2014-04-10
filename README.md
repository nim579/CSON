# CSON
CoffeeScript Object Notation

## Use

Install as npm module
~~~~~ bash
$ npm install cson-light
~~~~~

Use in scripts (Node.js)
~~~~~ js
var CSON = require('cson-light');
~~~~~

Use
~~~~~ js
CSON.parse(string);
~~~~~

## Methods

### readFile(path)
Converts CSON file in JavaScript object.

#### Parameters
* **path** — Path to CSON file

~~~~~ js
CSON.readFile("./data.cson") //return parsed CSON file as JavaScript object
~~~~~

### parse(string)

#### Parameters
* **object** — Stringifyed CSON object

~~~~~ js
CSON.parse('test: "data", "foo": "bar"\nsec: 1') //return { "test": "data", "foo": "bar", "sec": 1 }
~~~~~

### stringify(object [, spaces])

Convert JavaScript object to CSON

#### Parameters
* **object** — JavaScript object
* **spaces** — Causes the resulting string to be pretty-printed.

~~~~~ js
CSON.stringify({ "test": 'data', "foo": "bar", "sec": 1 }) //return 'test: "data"\nfoo: "bar"\nsec: 1'
CSON.stringify({ "test": 'data', "foo": "bar", "obj": {"foo": [1,2]} }, 4) //return 'test: "data"\nfoo: "bar"\nobj:\n  foo: [\n    1\n    2\n  ]'
~~~~~