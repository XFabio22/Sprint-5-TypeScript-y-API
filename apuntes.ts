console.log("Hello World")
//<-- PARA COMPILAR TS AUTOMATICAMENTE EJECUTAR EL COMANDO: tsc apuntes.ts -w  -->
//types

var myString:string = "Holaaaaa";
myString = 22 + "";   //Para meter un numero como String se debe concatenar con : + "" y esto decolvera a 22 como String y no Number

var myNumber :Number = 22;
var myBoolean : boolean = true;

var myVar:any = "Hello"; //accepta cuaclquier tipo de dato arrays, number,string...
myVar = 22;


document.write(myString); // como es un String por defecto no hay error
document.write(myNumber.toString()) // al ser un Type number a la hora de mostrarlo en el DOM debemos hacer toString() para poder mostrarlo

// arrays 
var myArray: any[]= ["","",""]; //de esta manera se declara una array que va a contener diferente tipo de datos 
myArray = [true,2,3,4,"Hello"];

var stringArray:string[] =["Hello"];
var NumberArray:Number[]=[2,3,4];
var booleanArray:boolean[]=[true,false ];
var anyArray:any[]=[true,2,3,4,"Hello"];

//taple
var arrayTaple : [string, number];
arrayTaple = ["Hello",22];
//arrayTaple = ["world",233,"",23] esto NO LEERA DOS DATOS SOLO LOS DOS PRIMEROS es decir leera solo los datos que se le declaren :var arrayTaple : [string, number];

//void,undefined,null
let myVoid : void = undefined;
let myNull: null =null;
let myUndefined: undefined = undefined;
  

//Functions
function getSum( num1:number, num2:number):number{
    return num1+num2;   
}
let mySun = function(  
    num1:number | string,
    num2:number | string):number{
        if(typeof (num1)==='string'){
            num1 = parseInt(num1);
        }if(typeof(num2)=== 'string'){
            num2= parseInt(num2);
        }
        return num1 + num2;
}

function getName (firstName :string, lastName?: string):string{ //si alguno de los paramaetros no esta definido
    if(lastName == undefined){
        return firstName;
    }
    return firstName + " "+ lastName; 
}

//Interfaces
interface ITodo{
    title: string;
    text: string;
}

function showTodo(todo : ITodo){
    console.log(`${todo.title}  ${todo.text}`)
}
// let myTodo: ITodo = {title:'EAT DINNER', text:'lorem',id:'1'} esto dara error ya que  ID no esta declarado en el interface
showTodo({
    title : 'Lola',
    text: 'lorem'
})


// clases
class USER {
    private name: string;
    public email: string;
    protected age: number;
    constructor(name: string,email: string,age: number){
        this.name = name;
        this.email =email;
        this.age = age
    }
    register(){
        console.log(`${this.name} is registered`)
    }
    private ageInYears(){ // si se le pone private este dato no sera accesible 
        return this.age + 'years'
    }
}

// var fabio = new USER('FABIO');
// console.log(fabio.register())
// document.write(fabio.name)
