
const readline = require('readline')

const rl = readline.createInterface(process.stdin, process.stdout)

/*
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

*/ 

rl.question('Whats your name : ', (answer) => {
    console.log(`Your full name is ${answer}`)
    process.exit()
})

