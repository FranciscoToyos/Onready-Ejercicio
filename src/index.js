let funciones = require('../customFunction')

let autosJson = funciones.getConces()

let autos= autosJson.autos;

//vehiculo más caro
let elMasCaro = (`Marca:${autos[2].marca} Modelo:${autos[2].modelo} Puertas:${autos[2].puertas} Precio:$${autos[2].precio}`)
 console.log(elMasCaro);

// Vehiculo más barato
 let elMasBarato =(`Marca:${autos[1].marca} Modelo:${autos[1].modelo} Cilindrada:${autos[1].cilindrada} Precio:$${autos[1].precio}`)
 console.log(elMasBarato)

 //Vehiculo que contiene la letra Y
 let contieneLetraY =(`Marca:${autos[3].marca} Modelo:${autos[3].modelo} Cilindrada:${autos[3].cilindrada} Precio:$${autos[3].precio}`)
 console.log(contieneLetraY)