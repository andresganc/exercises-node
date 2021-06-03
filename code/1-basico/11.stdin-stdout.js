
// STDOUT
// Es el comando para dar salida de datos por consola en NodeJS

process.stdout.write('USE STDOUT NODEJS with jump line \n')

process.stdout.write('USE STDOUT NODEJS without jump line')


// STDIN
// En trada de datos por consola

let nombre;

process.stdout.write('Cual es tu nombre: ')

process.stdin.on('data', function(data){
    
    nombre = data.toString().trim()
    
    process.stdout.write(`Hola: ${nombre} \n`)
    process.exit()

})



