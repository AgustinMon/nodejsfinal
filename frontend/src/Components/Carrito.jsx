import Service from "../Services/Service";
import { useState, useEffect} from "react";

const Carrito = () => {

    const [elementos, setElementos] = useState("");

    useEffect(
        () => {
            ( async ()=>{
                Service.getData("/getdata")
                .then((data) => setElementos(data.saludo));
            })()
        },
        []
    )

    return (
        <>
        "soy el carrito"
        {elementos}
        </>
    )
}

export default Carrito