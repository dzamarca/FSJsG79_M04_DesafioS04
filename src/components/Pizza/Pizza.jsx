import { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap"
import { setearValor } from "../../assets/utils/funciones"

const Pizza = () => {
    const [pizza, setPizza] = useState([])
    const [ingredi, setIngredi] = useState([])
    
    const URL = 'http://localhost:5000/api/pizzas/p001'

    useEffect(() => {
        const loadPizza = async () => {
            const res = await fetch(URL)
            const data = await res.json()
            setPizza(data)
            setIngredi(data.ingredients)
        }
        loadPizza()
    },[])

    return (
        <Card className="card mt-3" bg="light">
            {/* {console.log(pizza)} */}
            <Card.Header>
                <Card.Img variant="top" src={pizza.img} />
                <p className="tituloCard mb-0">Pizza {pizza.name}</p>
            </Card.Header>
            <Card.Body >
                <p className="mb-2">{pizza.desc}</p>
                <p className="mb-2">🍕 Ingredientes:</p>

                <ul className="m-0 listaIngredientes">
                    {ingredi.map(ingre =>
                        <li key={ingre}>{ingre}</li>
                    )}
                </ul>
            </Card.Body>
            <Card.Footer>
                <p className="precio">Precio ${(pizza.price)}</p>
                <div className="d-flex justify-content-evenly">
                    <Button variant="dark">Añadir 🛒</Button>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default Pizza