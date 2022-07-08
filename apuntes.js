console.log("Hello World");
//<-- PARA COMPILAR TS AUTOMATICAMENTE EJECUTAR EL COMANDO: tsc apuntes.ts -w  -->
//types
var myString = "Holaaaaa";
myString = 22 + ""; //Para meter un numero como String se debe concatenar con : + "" y esto decolvera a 22 como String y no Number
var myNumber = 22;
var myBoolean = true;
var myVar = "Hello"; //accepta cuaclquier tipo de dato arrays, number,string...
myVar = 22;
document.write(myString); // como es un String por defecto no hay error
document.write(myNumber.toString()); // al ser un Type number a la hora de mostrarlo en el DOM debemos hacer toString() para poder mostrarlo
// arrays 
var myArray = ["", "", ""]; //de esta manera se declara una array que va a contener diferente tipo de datos 
myArray = [true, 2, 3, 4, "Hello"];
var stringArray = ["Hello"];
var NumberArray = [2, 3, 4];
var booleanArray = [true, false];
var anyArray = [true, 2, 3, 4, "Hello"];
//taple
var arrayTaple;
arrayTaple = ["Hello", 22];
//arrayTaple = ["world",233,"",23] esto NO LEERA DOS DATOS SOLO LOS DOS PRIMEROS es decir leera solo los datos que se le declaren :var arrayTaple : [string, number];
//void,undefined,null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//Functions
function getSum(num1, num2) {
    return num1 + num2;
}
var mySun = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
function showTodo(todo) {
    console.log("".concat(todo.title, "  ").concat(todo.text));
}
// let myTodo: ITodo = {title:'EAT DINNER', text:'lorem',id:'1'} esto dara error ya que  ID no esta declarado en el interface
showTodo({
    title: 'Lola',
    text: 'lorem'
});
// clases
var USER = /** @class */ (function () {
    function USER(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    USER.prototype.register = function () {
        console.log("".concat(this.name, " is registered"));
    };
    USER.prototype.ageInYears = function () {
        return this.age + 'years';
    };
    return USER;
}());
// var fabio = new USER('FABIO');
// console.log(fabio.register())
// document.write(fabio.name)
