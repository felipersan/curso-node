const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('ola', (nome)=>{
    console.log(`Ola, ${nome}`)
})

emitter.on('ola', (nome)=>{
    console.log(`Oi, ${nome}`)
})

emitter.emit('ola', "Felipe")