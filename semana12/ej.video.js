let direccion = prompt("igrese la dirección url");
// ingrese esta dirección web:
//  https:drive.google.com/file/d/1Jn3S96hTm0goTFKaBvXh6BJ6B_gpUGRt/view?usp=share_link

let i = 0;
let t ="";
let inicio = 0;
let final = 0;

     for(i; i < direccion.length; i++){
        if(direccion.substring(i, i+2) === "d/"){
            inicio = i+2;
        }
        if(direccion.substring(i, i+2) === "/v"){
            final = i;
        }
     }
 t = direccion.substring(inicio, final);
     console.log("resutado del string:" + t);

let documento = document.createElement("imagen");

 let cadena = 'https://drive.google.com/uc?export=view&id=' + t;

   //documento.src='https://drive.google.com/uc?export=view&id=${t}
console.log("resultado del string:"+ t + "direccion completa:" + cadena);
 documento.src = cadena;

     let doc = document.getElementById("ruta");
         doc.appendChild(documento);