let nombre = "Maria Velazquez";
let edad = CalcularEdad(1998);
console.log ("Hola "  +  nombre);
console.log (nombre + " tiene "+ edad + " años");

function CalcularEdad(anioNacimiento){
    return  new Date().getFullYear()-anioNacimiento;
} 