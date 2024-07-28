import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    // api start
    fetch('https://dummyjson.com/products').then(res => res.json()).then((res) => {
      setProducts(res.products)
    })
    // api end
  }, [])

  return (
    <div>
      <center>
        {
          products.length ?
            products.map((item) => (
              <>
                <li>
                  <img width={200} src={item.thumbnail} />
                  {item.title}
                </li>
              </>
            ))
            : null
        }
        <h1>{count}</h1>
        <button onClick={handleClick}>Add +</button>
      </center>
    </div>
  )
}