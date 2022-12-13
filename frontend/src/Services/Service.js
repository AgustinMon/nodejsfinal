export default class Service {


    static async getData() {
        let url = `/getdata`;
        let data = {};
        await fetch(url)
          .then((d) => d.json())
          .then((d) => console.log("respuesta: ", d))
          .catch((err) => console.log("error from service: ", err))
          console.log(data);
        return data;
      }

}