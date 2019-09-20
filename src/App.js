import React, { useState } from 'react'


function ProductHeaderBlock({ name, description }) { 
  return (
    <div className="border-bottom-grey product-panel">
      <div className="product-title">
          <h1>{name}</h1>
          <div className="product-title-award-text">{description}</div>
      </div>
      <ul className="nav nav-tabs">
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
      </ul>
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
        { src: './ath-msr7-black.jpg', color: "black" },
        { src: './ath-msr7-brown.jpg', color: "brown" }
      ],
      description: "this thing is great this thing is great this thing is great this thing is great this thing is great this thing is great ",
      details: "so many details so many details so many details so many details so many details so many details so many details ",
      discountPrice: 59.99,
      retailPrice: 89.99,
    }
  )
  return (    
    <div className="product-container container row">
      <div className="panel border-right-grey col-centered col-12 col-lg-6">

        <div className="product-panel">
          <a href="#"><span className="color-lg">&#8592;</span> <span className="color-dg">All products</span></a>
        </div>

        <ProductHeaderBlock 
          name={product.name} 
          description={product.description} 
          // handleTextChange={this.handleTextChange} 
          // descriptionActive={this.state.descriptionActive}
          // detailActive={this.state.detailActive}
        />

        <div className="border-bottom-grey product-panel">
          <div className="product-text">
            PRODUCT TEXT
            {
              // this.state.text === 'description'
              //   ? this.renderDescription()
              //   : this.renderDetails()
            }
          </div>
          <div className="product-price">
              <span className="discount-price">$699.99</span>
              <span className="retail-price">$1299.99</span>
          </div>

          <div>Colors</div>

          
          <div className="dropdown show">
            <a className="color-options-dropdown btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                BLUEEEE
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              THINGSSSS
            </div>
          </div>
        </div>


        <div className="product-cart-block">
          <div className="product-panel">
              <button onClick={(e) => {}} className="cart-btn btn btn-primary">
                  ADD TO CARTTTT
              </button>
          </div>
        </div>
      </div>     

      <div className="panel col-centered col-12 col-lg-6">
          <img src={product.images[0].src} alt={product.name} />
      </div>

    </div>
  );

  
} 

export default App



