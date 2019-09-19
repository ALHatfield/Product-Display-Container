import React, { useState } from 'react'
import img1 from './ath-msr7-black.jpg';
import img2 from './ath-msr7-brown.jpg';

// function ProductHeaderBlock({ name }) {
//   return (
//     <>
//       <div>{name}</div>
//       <div>#1 rated in the world</div>
//     </>
//   )
// }
//////// archive
function ProductHeaderBlock({ name, description }) { 
  return (
    <div className="border-bottom-grey product-panel">
      <div className="product-title">
          <h1>{name}</h1>
          <div className="product-title-award-text">{description}</div>
      </div>
      {/* <ul className="nav nav-tabs">
        <li className="product-nav-item nav-item active">
          <div 
            // onClick={() => props.handleTextChange("description")}
          >
            DESCRIPTION
          </div>
        </li>
        <li className="product-nav-item nav-item">
          <div 
            // onClick={() => props.handleTextChange("details")}
          >
            DETAILS
          </div>
        </li>
      </ul> */}
    </div>
  );
}
////////////




function App() {
  const [product, setProduct] = useState(
    {
      name: "Audio-Technica ATH-MSR7",
      description: "2017 all the awards",
      images: [
        { src: img1, color: "black" },
        { src: img2, color: "brown" }
      ],
      description: "this thing is great this thing is great this thing is great this thing is great this thing is great this thing is great ",
      details: "so many details so many details so many details so many details so many details so many details so many details ",
      discountPrice: 59.99,
      retailPrice: 89.99,
    }
  )
  return(
    <div>
      <ProductHeaderBlock 
        name={product.name}
        description={product.description}
      />
    </div>
  )
} 

export default App



