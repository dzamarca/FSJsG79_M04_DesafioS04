import { useState, useEffect } from "react"
import CardPizza from "../CardPizza/CardPizza"

const Pizza = () => {
    const [pizza, setPizza] = useState(null)

    const URL = 'http://localhost:5000/api/pizzas/p001'

    useEffect(() => {
        const loadPizza = async () => {
            const res = await fetch(URL)
            const data = await res.json()
            setPizza(data)
        }
        loadPizza()
    }, [])

    if(!pizza) return <div>Cargando...</div>

    return (
        <div className="d-flex justify-content-center mb-4">
            <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc ={pizza.desc}
            />
        </div>
    )
}

export default Pizza