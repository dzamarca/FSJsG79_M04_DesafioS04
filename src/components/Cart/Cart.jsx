import { useState } from "react"
import { pizzaCart } from "../../assets/js/pizzas"
import { Button } from "react-bootstrap"
import "./Cart.css"
import {aumentaPizza,disminuyePizza, calculaTotal} from "../../assets/utils/funciones.js"

export const Cart = () => {
    const [cart, setCart] = useState(pizzaCart)

    const handleIncrementa = (id) => {
        setCart((cart2) => aumentaPizza(cart2, id));
    }

    const handleDisminuye = (id) => {
        setCart((cart2) => disminuyePizza(cart2, id));
    }
    const total = calculaTotal(cart)


    const calcularTotal = (cart) => {
        return cart.reduce((suma, pizza) => suma + pizza.price * pizza.count, 0);
    };

    return (
        <>
            <h3>Detalles del Pedido</h3>
            {cart.map(pizza =>

                <div className="cardPizza" key={pizza.id}>
                    <div className="imagenTexto">
                        <img src={pizza.img} alt="" />
                        <p className="nombrePizza">{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</p>
                    </div>
                    <div className="opciones">
                        <p className="nombrePizza">${pizza.price.toLocaleString()}</p>
                        <Button 
                            variant="dark" 
                            className="boton"
                            onClick={() =>handleDisminuye(pizza.id)}

                        >-</Button>
                        <p className="nombrePizza">{pizza.count}</p>
                        <Button 
                            variant="dark" 
                            className="boton" 
                            onClick={() =>handleIncrementa(pizza.id)}
                        >+</Button>
                    </div>
                </div>

            )}

            <h4>Total: {calcularTotal(cart).toLocaleString()}</h4>
            <Button variant="dark">Pagar 🛒</Button>
        </>
    )
}
