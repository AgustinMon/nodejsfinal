export default class Service {

     static async getData(url) {
        let data = {};
        let HOST = 'http://localhost:8080';   
        console.log("ruta ", HOST+url)
        await fetch(HOST+url)
          .then( d => d.json())
          .then( d => data = d)
          .catch((err) => console.log("error from service: ", err))
        return data;
      }

      static async postData(data) {
        let HOST = 'http://localhost:8080';
        await fetch(HOST+"/formulario", {
          method : "POST",
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
        })
        .then((result)=> result.json())
        .then((d) => console.log("respuesta", d))
        .catch((err)=>console.log("error de formulario", err))
      }

}