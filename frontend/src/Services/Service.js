export default class Service {

     static async getData(url) {
        let data = {};
        let HOST = 'http://localhost:8080';   
        console.log("ruta ", HOST+url)
        await fetch(HOST+url)
          .then( d => d.json())
          .then( d => console.log(d))
          .catch((err) => console.log("error from service: ", err))
        return data;
      }

}