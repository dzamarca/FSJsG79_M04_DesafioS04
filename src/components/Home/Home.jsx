import CardPizza from '../CardPizza/CardPizza'
import Header from '../Header/Header'
import './Home.css'
// import { pizzas } from '../../assets/js/pizzas'
import { useEffect, useState } from 'react'


const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const URL = 'http://localhost:5000/api/pizzas'
  
  useEffect(() => {
    loadPizzas()
  }, [])
  
  const loadPizzas = async ()=>{
    const res = await fetch(URL)
    const data = await res.json()
    setPizzas(data)
  }
  return (
    <>
      <Header />
      <div className='boxCards'>
        {pizzas.map(pizza => (
          <div key={pizza.id} className="d-flex justify-content-center mb-4 col-12 col-md-6 col-lg-4">
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>
        ))}
      </div>

    </>
  )
}

export default Home