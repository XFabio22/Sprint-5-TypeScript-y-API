// ERRORE INTENTE HACER UN MAP Y DABA ERROR PORQUE NO DEVOLVIA UNA ARRAY 
// NOTAS que arranque con un chiste y sacar el interface de la funcion cargar chiste 


// FETCH APIS WHATER & JOKE
// function randomJoke(){
//   let apiRandom =Math.floor(Math.random() * 2 + 1)
//   if(apiRandom == 1){
//     cargarChistes();
//   }else if (apiRandom == 2){
//     chuckJokes();
//   }
//   console.log ("1 JOKE , 2 CHUCK JOKE:",apiRandom);
// }

let reportJokes:any[] = [];

let fechaActual = new Date;
cargarTemperaturas();
async function cargarChistes() {
    const API_URL = "https://icanhazdadjoke.com/";
    let API_URL_CHUCK = "https://api.chucknorris.io/jokes/random";
    let confiApi = {
        headers: { 
            Accept: "application/json",
        },
    };
    let jokesZ:any  =  await fetch(API_URL, confiApi) // hace un peticion y devuelve el valor se asemeja a un forEach
    let jokes:any = await jokesZ.json();

    // .then( response => response.json())
    // .then(data => {
    //   let element:any = document.getElementById('joke');
    //   element.innerHTML = `<p>${data.joke}<p>`;
    //    cargarTemperaturas()
       
    // })
   
    let confiApi3 = {
    headers: { 
        Accept: "application/json",
    },
};

  let chuckJokes:any = await fetch( API_URL_CHUCK,confiApi3);
  let jokes2:any = await chuckJokes.json();
  // .then(response => response.json())
  // .then(dataChuck =>{
  //   let element:any = document.getElementById('joke');
  //   element.innerHTML = `<p>${dataChuck.value}<p>`;

  //   cargarTemperaturas();
  // }) 

  let apiRandom =Math.floor(Math.random());
  let resultado = apiRandom ? jokes.joke : jokes2.value; 
  let element:any = document.getElementById('joke');
  element.innerHTML = resultado;
  let ObjJoke = {
    date: fechaActual,
    joke: resultado,
    score: 0,
  };

  reportJokes.push(ObjJoke);
}
async function cargarTemperaturas(){
    let API_URL_TEMP ="http://api.weatherapi.com/v1/current.json?key=74b79570c166486883b85428221407&q=Barcelona&aqi=no";
    let confiApi2={
      headers:{
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
    }
  
    await fetch(API_URL_TEMP,confiApi2)
    .then(response => response.json())
    .then(dataTemp =>{
      let element:any = document.getElementById('temperatura');
      element.innerHTML = `<p>${dataTemp.current.temp_c}<p>`;
      console.log(dataTemp.current.temp_c);
    }) 
}

// async function chuckJokes() {
//   let API_URL_CHUCK = "https://api.chucknorris.io/jokes/random";
//   let confiApi3 = {
//     headers: { 
//         Accept: "application/json",
//     },
// };

//  await fetch( API_URL_CHUCK,confiApi3)
//   .then(response => response.json())
//   .then(dataChuck =>{
//     let element:any = document.getElementById('joke');
//     element.innerHTML = `<p>${dataChuck.value}<p>`;

//     cargarTemperaturas();
//   }) 
// }
  cargarChistes();

  // CREATE OBJ JOKE

  

//   interface ObjJoke{
//     id: string;
//     jokeP: string;
//     score: number;
//     date : string;
// }

//   class VOTEDJOKE implements ObjJoke {
//     id: string;
//     jokeP: string;
//     score: number;
//     date : string;
//     constructor(id: string, jokeP: string,score: number, date : string){
//       this.id= id;
//       this.jokeP = jokeP;
//       this.score = score;
//       this.date = date;
//     }
//   }

  // function crearObjJoke(data){
    
  //     let id =data.id
  //   let chiste:any = data.joke
  //   let jokeP= chiste;
  //   let score = 0;
  //   let date = fechaActual.toISOString();
  //   let joke1 = new VOTEDJOKE(id,jokeP,score,date);
  //   reportJokes.push(joke1)
    

  // }  
  

// SCORE BUTTONS 
function puntuacion1(score: number) {
reportJokes[reportJokes.length -1 ].score = score;

 

  console.log("Chiste reportados", reportJokes);
cargarChistes()
};

