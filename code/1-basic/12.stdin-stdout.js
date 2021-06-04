
// STDOUT
// Es el comando para dar salida de datos por consola en NodeJS

process.stdout.write('USE STDOUT NODEJS with jump line \n')

process.stdout.write('USE STDOUT NODEJS without jump line')


// STDIN
// En trada de datos por consola


// Ejemplo 1
let nombre1
process.stdout.write(' Emeplo 1 - Ingresa un numero')
process.stdin.on('data', () => { nombre1 = data.toString().trim(); process.exit(); })



// Ejemplo 2
// Node.js program to demonstrate the
// process.stdin Property

// Enter any texts ( User input)
process.stdin.on('data', data => {
    console.log(`You typed ${data.toString()}`);
    process.exit();
    });
    


// Ejemplo 3
let nombre2;
process.stdout.write('Cual es tu nombre: ')

process.stdin.on('data', function(data) { 
    nombre2 = data.toString().trim(); 
    process.stdout.write(`Hola: ${nombre2} \n`)
    process.exit()
})



// Ejemplo 4
// Node.js program to demonstrate the
// process.stdin Property

process.stdin.on('readable', () => {
    let chunk;
    // Use a loop to make sure we read all available data.
    while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
    }
    });



