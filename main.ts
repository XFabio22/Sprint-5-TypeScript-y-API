

async function cargarChiste() {
    const API_URL = "https://icanhazdadjoke.com/";
    let requestOptions1 = {
        headers: {
          Accept: "application/json",
        },
      };
      const respuesta: any = await fetch(API_URL, requestOptions1);
      const chisteResuesta: any = await respuesta.json();
      console.log(chisteResuesta);
} 