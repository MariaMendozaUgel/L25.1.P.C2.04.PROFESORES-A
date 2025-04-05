/*/ El departamento de juguetes está ofreciendo un descuento del 10% si el juguete es para 
edad de 1 año. 
Usando la clase suministrada Cl_articulo, programe la clase Cl_juguete con el atributo edad y 
el método descuento, que permita calcular el monto a pagar correctamente. Note que esta nueva 
clase sólo amerita edad y descuento(). 
Realice un programa que lea los datos de un juguete y reporte el monto a pagar. Ejemplos de la corrida: 
Nombre del juguete: carrito 
Cantidad: 2 
Precio base: $10 
Edad recomendada: 2 
Monto a pagar por el carrito: $20.00 
Nombre del juguete: peluche 
Cantidad: 3 
Precio base: $20 
Edad recomendada: 1 
Monto a pagar por el peluche: $54.00/*/

import Cl_juguete from "./Cl_juguete.js"
import Cl_articulo from "./Cl_articulo.js"

let juguete = new Cl_juguete ("carrito", 2, 10, 2);
let juguete2 = new Cl_juguete ("peluche", 3, 20, 1);
let monto = juguete.aPagar();

let salida = document.getElementById("salida");
salida.innerHTML = `
Nombre del juguete ${juguete.nombre} <br>
cantidad ${juguete.cantidad} <br>
Edad recomendada ${juguete.edad} <br>
Monto a pagar por el carrito: ${juguete.aPagar()} <br> <br>

Nombre del juguete ${juguete2.nombre} <br>
cantidad ${juguete2.cantidad} <br>
Edad recomendada ${juguete2.edad} <br>
Monto a pagar por el peluche: ${juguete2.aPagar()} <br> <br>
`;