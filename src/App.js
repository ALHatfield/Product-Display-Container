import React, { useState } from 'react'
import ProductPage from './ProductPage'
import img1 from './ath-msr7-black.jpg'
import img2 from './ath-msr7-brown.jpg'

const data = {
  name: "Audio-Technica ATH-MSR7",
  awards: "2017 all the awards",
  images: [
    { src: img1, color: "black" },
    { src: img2, color: "brown" }
  ],
  description: "this thing is great",
  details: "so many details",
  discountPrice: 699.99,
  retailPrice: 1299.99,
}


const App = () => {
  const [product, setProduct] = useState(data)

  return (    
    <ProductPage {...product}/>
  );
} 

export default App



