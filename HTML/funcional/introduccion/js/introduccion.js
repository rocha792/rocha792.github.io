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
var numeros=[1,5,10,15]
var users=[
    {id:1, age:10,name:"Juan"},
    {id:2, age:15,name:"Luis"},
    {id:3, age:18,name:"Hoel"},
]
//map mapeo o 
var doubles = numeros.map( (num)=>age*3 );
//reduce el arreglo segun la condicion
const reducer= (previusValue,currentValue)=> previusValue+currentValue;
var reduce=numeros.reduce( reducer, 5 );
let filter=numeros.filter((num)=> num>6);
let found= users.find( (users)=>users.age>14 );

//Concat
let concat = age.concat( (age)=>14 );
//Fill
let Fi = age.fill( (age)=> 5 );
//Every
let ev = num.every( (num)=>2 );
//Flat  var numeros=[1,5,10,15] si aqui estubiera var numeros=[1,5,[10,[15]], [[20]]] se quitan los corchete porque los aplana= numeros=[1,5,10,15,20]
let Fl = users.flat( flat );
//Includes  demuestra si existe un registro en el array
let In = age.includes( (age)=15 );
//Pop  elimina el ultimo registro del array
let Po = users.pop(users);
//Push  agraga más reguistro al array
let Pu = users.push( (users)="Ana","Ed" );


console.log(push);