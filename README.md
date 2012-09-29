# for-each-stream

Call an iterator for each chunk in the stream

## Example

```
var from = require("read-stream").fromArray
    , forEach = require("for-each-stream")

forEach(from([1,2,3]), function (item) {
    console.log("item", item)
})
```

## Installation

`npm install for-each-stream`

## Contributors

 - Raynos

## MIT Licenced
