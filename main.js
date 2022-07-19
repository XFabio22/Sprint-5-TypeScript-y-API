// ERRORE INTENTE HACER UN MAP Y DABA ERROR PORQUE NO DEVOLVIA UNA ARRAY 
// NOTAS que arranque con un chiste y sacar el interface de la funcion cargar chiste 
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
var antesDeReportar = [];
var reportJoke = [];
var fechaActual = new Date;
cargarTemperaturas();
function cargarChistes() {
    return __awaiter(this, void 0, void 0, function () {
        var API_URL, API_URL_CHUCK, confiApi, jokesZ, jokes, confiApi3, chuckJokes, jokes2, apiRandom, resultado, element, ObjJoke;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    API_URL = "https://icanhazdadjoke.com/";
                    API_URL_CHUCK = "https://api.chucknorris.io/jokes/random";
                    confiApi = {
                        headers: {
                            Accept: "application/json"
                        }
                    };
                    return [4 /*yield*/, fetch(API_URL, confiApi)];
                case 1:
                    jokesZ = _a.sent();
                    return [4 /*yield*/, jokesZ.json()];
                case 2:
                    jokes = _a.sent();
                    confiApi3 = {
                        headers: {
                            Accept: "application/json"
                        }
                    };
                    return [4 /*yield*/, fetch(API_URL_CHUCK, confiApi3)];
                case 3:
                    chuckJokes = _a.sent();
                    return [4 /*yield*/, chuckJokes.json()];
                case 4:
                    jokes2 = _a.sent();
                    apiRandom = Math.floor(Math.random());
                    resultado = apiRandom ? jokes.joke : jokes2.value;
                    element = document.getElementById('joke');
                    element.innerHTML = resultado;
                    ObjJoke = {
                        date: fechaActual,
                        joke: resultado,
                        score: 0
                    };
                    antesDeReportar.push(ObjJoke);
                    return [2 /*return*/];
            }
        });
    });
}
function cargarTemperaturas() {
    return __awaiter(this, void 0, void 0, function () {
        var API_URL_TEMP, confiApi2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    API_URL_TEMP = "http://api.weatherapi.com/v1/current.json?key=74b79570c166486883b85428221407&q=Barcelona&aqi=no";
                    confiApi2 = {
                        headers: {
                            "Transfer-Encoding": "chunked",
                            "Connection": "keep-alive",
                            "Vary": "Accept-Encoding",
                            "CDN-PullZone": "93447",
                            "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
                            "CDN-RequestCountryCode": "GB",
                            "CDN-ProxyVer": "1.02",
                            "CDN-RequestPullSuccess": "True",
                            "CDN-RequestPullCode": "200",
                            "CDN-CachedAt": "07/15/2022 23:19:46",
                            "CDN-EdgeStorageId": "752",
                            "CDN-Status": "200",
                            "CDN-RequestId": "0b24f89fabca4370fd07868e18fb9c75",
                            "CDN-Cache": "MISS",
                            "Cache-Control": "public, max-age=180",
                            "Content-Type": "application/json",
                            "Date": "Fri, 15 Jul 2022 23:19:46 GMT",
                            "Server": "BunnyCDN-DE-880"
                        }
                    };
                    return [4 /*yield*/, fetch(API_URL_TEMP, confiApi2)
                            .then(function (response) { return response.json(); })
                            .then(function (dataTemp) {
                            var element = document.getElementById('temperatura');
                            element.innerHTML = "<p>".concat(dataTemp.current.temp_c, "<p>");
                            console.log(dataTemp.current.temp_c);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
cargarChistes();
// CREATE OBJ JOKE
// SCORE BUTTONS 
function puntuacion1(score) {
    antesDeReportar[antesDeReportar.length - 1].score = score;
    var reportJoke = antesDeReportar.filter(function (ObjJoke) {
        return ObjJoke.score > 0;
    });
    console.log("Chiste reportados", reportJoke);
    cargarChistes();
}
;
