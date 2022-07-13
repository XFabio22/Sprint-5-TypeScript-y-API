// async function cargarChiste() {
//     const API_URL = "https://icanhazdadjoke.com/";
//     let confiApi = {
//         headers: {
//           Accept: "application/json",
//         },
//       };
//       // const respuesta: any = 
//       await fetch(API_URL, confiApi)
//       .then((response)=> response.json())
//       .then((chistes) => {
//         const tpl= chistes.map((chiste:string) => `<li> ${chiste}</li>`)
//         HTMLResponse.innerHTML=`<ul>${tpl} </ul>`
//       })
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//       // const chisteResuesta: any = await respuesta.json();
//       // console.log(chisteResuesta);
// } 
// async function cargarChistes() {
//     const API_URL = "https://icanhazdadjoke.com/";
//     let confiApi = {
//         headers: {
//             Accept: "application/json",
//         },
//     };
//     const respuesta: any = await fetch(API_URL, confiApi)
//     const chisteResuesta: any = await respuesta.json();
//     console.log(chisteResuesta);
// }
// ERRORE INTENTE HACER UN MAP Y DABA ERROR PORQUE NO DEVOLVIA UNA ARRAY 
// NOTAS que arranque con un chiste y sacar el interface de la funcion cargar chiste 
var antesDreport = [];
function cargarChistes() {
    return __awaiter(this, void 0, void 0, function () {
        var API_URL, confiApi;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    API_URL = "https://icanhazdadjoke.com/";
                    confiApi = {
                        headers: {
                            Accept: "application/json"
                        }
                    };
                    return [4 /*yield*/, fetch(API_URL, confiApi) // hace un peticion y devuelve el valor se asemeja a un forEach
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            var element = document.getElementById('joke');
                            element.innerHTML = "<p>".concat(data.joke, "<p>");
                            antesDreport.push(data);
                            console.log(antesDreport);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
cargarChistes();
var reportJoke = [];
var fechaActual = new Date;
var VOTEDJOKE = /** @class */ (function () {
    function VOTEDJOKE(jokeP, score, date) {
        this.jokeP = jokeP;
        this.score = score;
        this.date = date;
    }
    return VOTEDJOKE;
}());
function puntuacion1(id) {
    var chiste = antesDreport.map(function (datos) { return datos.joke; });
    var jokeP = chiste;
    var score = 1;
    var date = fechaActual.toISOString();
    var joke1 = new VOTEDJOKE(jokeP, score, date);
    reportJoke.push(joke1);
    console.log(reportJoke);
}
function puntuacion2() {
}
function puntuacion3() {
}
