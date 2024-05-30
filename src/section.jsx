import React from "react";
import { useEffect,useState } from "react";
import axios from 'axios'

function Section() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((res) => setProducts(res))

    ///////////////////////////////////////////////
    // axios.get('https://fakestoreapi.com/products')
    // .then((res)=>setProducts(res.tada))

    }, [])
  
    return (
      <div className='prod'>
        {
          products.map((prod) => {
            return <div>

              <h3>{prod.title}</h3>
              <img src={prod.image} />
            </div>
          })
        }
      </div>
    )
}

export default Section