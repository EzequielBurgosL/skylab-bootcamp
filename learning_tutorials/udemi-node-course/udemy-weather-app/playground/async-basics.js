console.log('starting app')

setTimeout(() => {
    console.log('inside callback function')
}, 2000)

setTimeout(() => {
    console.log('second setTimeout')
}, 0)

console.log('finishing app')