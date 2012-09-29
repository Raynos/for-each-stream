var from = require("read-stream").fromArray

    , forEach = require("..")

forEach(from([1,2,3]), function (item) {
    console.log("item", item)
})
