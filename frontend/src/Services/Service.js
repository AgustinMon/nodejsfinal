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
          method : "POST"
        })
        .then(console.log("data enviada"))
        .catch(console.log("error de formulario"))
      }

}