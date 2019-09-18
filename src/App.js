import React, { useState } from 'react'


function ProductHeaderBlock({ name }) {
  return (
    <>
      <div>{name}</div>
      <div>#1 rated in the world</div>
    </>
  )
}



function App() {
  const [product, setProduct] = useState(
    {
      name: 'Audio-Tech'
    }
  )
  return(
    <div>
      <ProductHeaderBlock 
        name={product.name}
      />
    </div>
  )
} 

export default App
