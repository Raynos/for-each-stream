var WriteStream = require("write-stream")

module.exports = forEach

function forEach(stream, iterator, finish) {
    stream.pipe(WriteStream(iterator, finish))
}
