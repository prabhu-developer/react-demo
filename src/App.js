import React, { useEffect, useState } from 'react';
import GlobalStateList from './components/GlobalStateList';
import { useStoreContext } from './context/storeContext';
import { getAllProducts } from './services/product.service';

export default function App() {
  const { user } = useStoreContext()

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  const handleClick = () => {
    setCount(count + 1)
  }

  const getData = async () => {
    const data = await getAllProducts()
    console.log(data, 'dtata')
  }

  useEffect(() => {
    // api start
    getData()
    // api end
  }, [])
  return (
    <div>
      <h1>{user.firstName} {user.lastName}</h1>
      <center>
        {
          products.length ?
            products.map((item) => (
              <>
                <li key={item.id}>
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
      <GlobalStateList />
    </div>
  )
}