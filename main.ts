
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

async function cargarChistes() {


    const API_URL = "https://icanhazdadjoke.com/";
    let confiApi = {
        headers: {
            Accept: "application/json",
        },
    };
   await fetch(API_URL, confiApi) // hace un peticion y devuelve el valor se asemeja a un forEach
    .then( response => response.json())
    .then(data => {
      let element:any = document.getElementById('joke');
      element.innerHTML = `<p>${data.joke}<p>`;
        

      // let puntos:any = document.getElementById('puntuacion');
      // document.getElementById('puntuacion').innerHTML='';

      // const puntos1 = document.createElement('p');
      // puntos1.innerHTML = '<button class="btn btn-outline-danger m-1" onclick="puntuacion1('+data.id+')">😐</button>';
      // puntos.appendChild(puntos1);

      // const puntos2 = document.createElement('p');
      // puntos2.innerHTML = '<button class="btn btn-outline-warning m-1" onclick="puntuacion2('+data.joke+')">🙂</button>';
      // puntos.appendChild(puntos2);

      // const puntos3 = document.createElement('p');
      // puntos3.innerHTML = '<button class="btn btn-outline-success m-1" onclick="puntuacion3('+data.joke+')">😆</button>';
      // puntos.appendChild(puntos3);
      
    })
  
   
  }
  
  let reportJoke:any[] = []
  let fechaActual = new Date;

  cargarChistes()
  interface ObjJoke{
    jokeP: string;
    score: number;
    date : string;
}
  

  class VOTEDJOKE implements ObjJoke {
    jokeP: string;
    score: number;
    date : string;
    constructor( jokeP: string,score: number, date : string){
      this.jokeP = jokeP;
      this.score = score;
      this.date = date;
    }
  }
 

  function puntuacion1(data){
    let jokeP= data;
    let score = 1;
    let date = fechaActual.toISOString();
    let joke1 = new VOTEDJOKE(jokeP,score,date);
    reportJoke.push(joke1)
    console.log(reportJoke);

  }
  function puntuacion2(){
    
  }
  function puntuacion3(){
    
  }


