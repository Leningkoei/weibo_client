const e = require('express')

const server = e()
server.use(e.static(__dirname + '/dist'))

server.listen(2048, () => {
    console.log('http://127.0.0.1:2048')
})
