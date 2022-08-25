let nombre = "Mari Cruz  Velazquez";
let edad = CalcularEdad(1998);
console.log ("Hola "  +  nombre);
console.log (nombre + " tiene "+ edad + " años");
console.log ("Se le pagara: "+calcularSalario(8, 30000));

function CalcularEdad(anioNacimiento){
    return  new Date().getFullYear()-anioNacimiento;
} 

function calcularSalario(horasTrabajadas, montoPorHora){
    return horasTrabajadas * montoPorHora;
}