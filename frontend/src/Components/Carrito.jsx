import Service from "../Services/Service";

const Carrito = () => {
    return (
        <>
        {Service.getData("/getdata")}
        "soy el carrito"
        </>
    )
}

export default Carrito