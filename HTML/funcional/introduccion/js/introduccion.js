//Imperactiva 
const hola= "Hola";
const decirHola =()=>{
    console.log(`Hi ${hola}`);
}
//decirHola()


//Se guarda la funcion
//const dHi=(nombre)=>`Hi ${hola}`;

//Llamar a imprimir
//console.log( dHi("Jose"));

//Objeto
const sum = (a,b) => a + b;
const sum2 = (a,b) => a - b;
const suma = (a,b,sum) => sum(a,b);


console.log(suma(2,2,sum2));
//console.log(suma(2,5,function(a,b){return a+b;}));
//let cachar= sum(2,2);

//console.log(cachar);