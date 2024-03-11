import React, { useState, useEffect } from 'react';
import "../css/listobjects.css";

const List = ({ filters }) => {
  const [filteredProducts, setFilteredProducts] = useState([]); // Holds the list of filtered products based on the applied filters

  // Hardcoded array of product objects
  const products = [
    {
      "id": 1,
      "title": "HP Elite Desktop PC Computer",
      "description": "- Intels Quad-Core Processor, with Windows 10 Installed; Browse the web, stream video, and stay productive with lag-free professional grade multi-tasking.",
      "price": "189.99",
      "image": "https://i.imgur.com/3XU36MD.jpg",
      "type": "computer"
    },
    {
      "id": 2,
      "title": "Alienware Aurora R15 Gaming Desktop",
      "description": "- POWERFUL GAMING PROCESSOR: Designed for gamers and creators with the new generation of Intel Core i9-13900F processor.",
      "price": "2799.99",
      "image": "https://i.imgur.com/r4kYRc7.jpg",
      "type": "game"
    },
    {
      "id": 3,
      "title": "INSIGNIA 42-inch Class F20 Series Smart Full HD 1080p Fire TV.",
      "description": "- 1080p resolution View your favorite movies, shows and games in high definition. Alexa voice control.",
      "price": "159.99",
      "image": "https://i.imgur.com/rb4gWs2.jpg",
      "type": "tv"
    },
    {
      "id": 4,
      "title": "Nintendo Switch™ with Neon Blue and Neon Red Joy‑Con™.",
      "description": "- 6.2” LCD screen Three play modes: TV tabletop and handheld Local co-op online and local wireless multiplayer Detachable Joy-Con controllers.",
      "price": "299.99",
      "image": "https://i.imgur.com/W91XSdZ.jpg",
      "type": "game"
    },
    {
      "id": 5,
      "title": "Headphones Wireless Bluetooth 70 Hours Playtime Bluetooth Headphones with Microphone.",
      "description": "- Bluetooth headphones feature advanced dual 40mm dynamic sound units and 3 EQ modes designed for audiophiles",
      "price": "16.99",
      "image": "https://i.imgur.com/tKn8L8M.jpg",
      "type": "electronics"
    },
    {
      "id": 6,
      "title": "SAMSUNG Galaxy S23+ Plus Cell Phone Factory Unlocked Android Smartphone.",
      "description": "- FASTEST MOBILE PROCESSOR AVAILABLE: Smoothly switch between apps with our fastest processor ever.",
      "price": "999.99",
      "image": "https://i.imgur.com/iM6CFiS.jpg",
      "type": "phone"
    },
    {
      "id": 7,
      "title": "Canon EOS 850D / Creative Filter Set.",
      "description": "- Bundle Items Include: 1 x Canon EOS 850D DSLR Camera with 18-55mm Lens | 1 x SanDisk 64GB Extreme PRO UHS-I SDXC Memory Card.",
      "price": "939.99",
      "image": "https://i.imgur.com/iOhhZse.jpg",
      "type": "camera"
    },
    {
      "id": 8,
      "title": "4K Video Camera Camcorder 48MP.",
      "description": "- This 2023 latest 4k Plus version camera adopts 6-Axis anti-shake technology to improve high-precision stabilization while shooting.",
      "price": "149.99",
      "image": "https://i.imgur.com/fIs82gE.jpg",
      "type": "camera"
    },
    {
      "id": 9,
      "title": "DJI - Mini 3 Pro Drone and Remote Control with Built-in Screen (DJI RC)",
      "description": "- This mini-sized mega-capable DJI Mini 3 Pro is just as powerful as it is portable. Weighing less than 249 g and with upgraded safety features.",
      "price": "909.99",
      "image": "https://i.imgur.com/rDEyXvi.jpg",
      "type": "electronics"
    },
    {
      "id": 10,
      "title": "Arlo - Pro 4 Spotlight Camera Security Bundle.",
      "description": "- Includes cloud recordings of video clips at 2K or lower resolution for 30 days. Renewal of an Arlo Secure plan is required to maintain Arlo Secure features.",
      "price": "279.99",
      "image": "https://i.imgur.com/Rni8Ous.jpg",
      "type": "electronics"
    },
    {
      "id": 11,
      "title": "Microsoft Surface Pro 9, 13",
      "description": " 16GB Memory.",
      "price": "1099.99",
      "image": "https://i.imgur.com/QgExXVw.jpg",
      "type": "computer"
    },
    {
      "id": 12,
      "title": "Xbox Series X 1TB Console Diablo IV Bundle Black.",
      "description": "- Xbox Velocity Architecture Fight for the fate of Sanctuary with the fastest most powerful Xbox ever.",
      "price": "559",
      "image": "https://i.imgur.com/SuXmQ3E.jpg",
      "type": "game"
    }
  ];
    // Add more products here
 
    useEffect(() => {
      const newFilteredProducts = products.filter(product => {
        const matchesProductType = filters.productType && product.type ? product.type.includes(filters.productType) : true;
        const matchesPriceRange = filters.priceRange && filters.priceRange.length === 2 // Add this check
          ? parseFloat(product.price) >= parseFloat(filters.priceRange[0] || 10) && parseFloat(product.price) <= parseFloat(filters.priceRange[1] || 3000)
          : true;
        
        return matchesProductType && matchesPriceRange;
      });
      
      setFilteredProducts(newFilteredProducts);
    
      console.log('Filtered products:', newFilteredProducts); // Log filtered products
    }, [filters]);

  return (
    <>
      <div className="productbox">
        {/* Input field and filter options go here */}
        <ul className="productlist">
          {filteredProducts.map((product) => (
            <li key={product.id} className="productitem">
              <h3>{product.title}</h3>
              <br/><br/>
              <img
                id={`productImage-${product.id}`} 
                className="productimage"
                src={product.image} // Use the image URL directly from the product object
                alt={product.title}
              />
              <br/><br/>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
              <button className='addtocart' type="submit">Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;



///////////
// import React, { useState, useEffect } from 'react';
// import "../css/listobjects.css"

// const List = ({ filters }) => {
//   const [products, setProducts] = useState([]); // Holds the list of all products
//   const [filteredProducts, setFilteredProducts] = useState([]); // Holds the list of filtered products based on the applied filters

//   useEffect(() => {
//     // Fetch the list of products from the API when the component mounts
//     fetch('http://localhost:4000/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data); // Store the fetched products in the 'products' state variable
//         // Initially, set filtered products to all products
//         setFilteredProducts(data);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     const newFilteredProducts = products.filter(product => {
//       const matchesProductType = filters.productType && product.type ? product.type.includes(filters.productType) : true;
//       const matchesPriceRange = filters.priceRange.length === 2
//         ? parseFloat(product.price) >= parseFloat(filters.priceRange[0] || 10) && parseFloat(product.price) <= parseFloat(filters.priceRange[1] || 3000)
//         : true;
  
//       return matchesProductType && matchesPriceRange;
//     });
  
//     setFilteredProducts(newFilteredProducts);

//     console.log('Filtered products:', newFilteredProducts); // Log filtered products
//   }, [filters, products]);
//   return (
//     <>
//       <div className="productbox">
//         {/* Input field and filter options go here */}
//         <ul className="productlist">
//           {filteredProducts.map((product) => (
//             <li key={product.id} className="productitem">
//               <h3>{product.title}</h3>
//               <br/><br/>
//               <img
//                 id={`productImage-${product.id}`} 
//                 className="productimage"
//                 src={`${process.env.PUBLIC_URL}${product.image}`}
//                 alt={product.title}
//               />
//               <br/><br/>
//               <p>{product.description}</p>
//               <p className="price">${product.price}</p>
//               <button className='addtocart' type="submit">Add to Cart</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default List;

















// import React, { useState, useEffect } from 'react';
// import "../css/listobjects.css"

// const List = ({ filters }) => {
//   const [products, setProducts] = useState([]); // Holds the list of all products
//   const [filteredProducts, setFilteredProducts] = useState([]); // Holds the list of filtered products based on the applied filters

//   useEffect(() => {
//     // Fetch the list of products from the API when the component mounts
//     fetch('http://localhost:4000/api/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data); // Store the fetched products in the 'products' state variable
//         // Initially, set filtered products to all products
//         setFilteredProducts(data);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     // Update filtered products when filters change
//     const newFilteredProducts = products.filter(product => {
//       // Check if product.type is defined before calling includes
//       const matchesProductType = filters.productType && product.type ? product.type.includes(filters.productType) : true;
//       const matchesPriceRange = filters.priceRange.length === 2
//         ? product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
//         : true;

//       return matchesProductType && matchesPriceRange;
//     });

//     setFilteredProducts(newFilteredProducts); // Update the 'filteredProducts' state with the newly filtered products
//   }, [filters, products]);

//   return (
//     <>
//       <div className="productbox">
//         {/* Input field and filter options go here */}
//         <ul className="productlist">
//           {filteredProducts.map((product) => (
//             <li key={product.id} className="productitem">
//               <h3>{product.title}</h3>
//               <br/><br/>
//               <img
//                 id={`productImage-${product.id}`} 
//                 className="productimage"
//                 src={`${process.env.PUBLIC_URL}${product.image}`}
//                 alt={product.title}
//               />
//               <br/><br/>
//               <p>{product.description}</p>
//               <p className="price">${product.price}</p>
//               <button className='addtocart' type="submit">Add to Cart</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default List;










// import React, { useState, useEffect } from 'react';
// import "../css/listobjects.css"

// const List = ({ filters }) => {
//   const [products, setProducts] = useState([]); // Holds the list of all products
//   const [filteredProducts, setFilteredProducts] = useState([]); // Holds the list of filtered products based on the applied filters
//   const [error, setError] = useState(null); // Holds any error that occurs during data fetching

//   useEffect(() => {
//     // Fetch the list of products from the API when the component mounts
//     fetch('http://localhost:4000/api/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data); // Store the fetched products in the 'products' state variable
//         // Initially, set filtered products to all products
//         setFilteredProducts(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setError(error); // Set the error state if an error occurs during fetching
//       });
//   }, []);

//   useEffect(() => {
//     // Update filtered products when filters change
//     if (!filters || !filters.productType) {
//       // If filters or productType is not defined, set filtered products to all products
//       setFilteredProducts(products);
//       return;
//     }

//     const newFilteredProducts = products.filter(product => {
//       const matchesProductType = product.type.includes(filters.productType); // Check if the product type matches the filter criteria
//       const matchesPriceRange = filters.priceRange.length === 2
//         ? product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1] // Check if the product price is within the filter price range
//         : true; // If no price range is specified, consider all products as a match

//       return matchesProductType && matchesPriceRange; // Return true if both filter conditions are met
//     });

//     setFilteredProducts(newFilteredProducts); // Update the 'filteredProducts' state with the newly filtered products
//   }, [filters, products]);

//   if (error) {
//     return <div>Error: {error.message}</div>; // Render the error message if an error occurs during data fetching
//   }

//   return (
//     <>
//       <div className="productbox">
//         {/* Input field and filter options go here */}
//         <ul className="productlist">
//           {filteredProducts.map((product) => (
//             <li key={product.id} className="productitem">
//               <h3>{product.title}</h3>
//               <br/><br/>
//               <img
//                 id={`productImage-${product.id}`} 
//                 className="productimage"
//                 src={`${process.env.PUBLIC_URL}${product.image}`}
//                 alt={product.title}
//               />
//               <br/><br/>
//               <p>{product.description}</p>
//               <p className="price">${product.price}</p>
//               <button className='addtocart' type="submit">Add to Cart</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default List;




















////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import "../css/listobjects.css"

// const List = ({ filters }) => {
//   const [products, setProducts] = useState([]); // Holds the list of all products
//   const [filteredProducts, setFilteredProducts] = useState([]); // Holds the list of filtered products based on the applied filters

//   useEffect(() => {
//     // Fetch the list of products from the API when the component mounts
//     fetch('http://localhost:4000/api/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data); // Store the fetched products in the 'products' state variable
//         // Initially, set filtered products to all products
//         setFilteredProducts(data);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     // Update filtered products when filters change
//     if (!filters || !filters.productType) {
//       // If filters or productType is not defined, set filtered products to all products
//       setFilteredProducts(products);
//       return;
//     }

//     const newFilteredProducts = products.filter(product => {
//       const matchesProductType = product.type.includes(filters.productType); // Check if the product type matches the filter criteria
//       const matchesPriceRange = filters.priceRange.length === 2
//         ? product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1] // Check if the product price is within the filter price range
//         : true; // If no price range is specified, consider all products as a match

//       return matchesProductType && matchesPriceRange; // Return true if both filter conditions are met
//     });

//     setFilteredProducts(newFilteredProducts); // Update the 'filteredProducts' state with the newly filtered products
//   }, [filters, products]);

//   return (
//     <>
//       <div className="productbox">
//         {/* Input field and filter options go here */}
//         <ul className="productlist">
//           {filteredProducts.map((product) => (
//             <li key={product.id} className="productitem">
//               <h3>{product.title}</h3>
//               <br/><br/>
//               <img
//                 id={`productImage-${product.id}`} 
//                 className="productimage"
//                 src={`${process.env.PUBLIC_URL}${product.image}`}
//                 alt={product.title}
//               />
//               <br/><br/>
//               <p>{product.description}</p>
//               <p className="price">${product.price}</p>
//               <button className='addtocart' type="submit">Add to Cart</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default List;








// import React, { useState, useEffect } from 'react';
// import "../css/listobjects.css"

// const List = ({ filters }) => {
//   const [products, setProducts] = useState([]); // Holds the list of all products
//   const [filteredProducts, setFilteredProducts] = useState([]); // Holds the list of filtered products based on the applied filters

//   useEffect(() => {
//     // Fetch the list of products from the API when the component mounts
//     fetch('http://localhost:4000/api/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data); // Store the fetched products in the 'products' state variable
//         // Initially, set filtered products to all products
//         setFilteredProducts(data);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     // Update filtered products when filters change
//     const newFilteredProducts = products.filter(product => {
//       const matchesProductType = filters.productType ? product.type.includes(filters.productType) : true; // Check if the product type matches the filter criteria
//       const matchesPriceRange = filters.priceRange.length === 2
//         ? product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1] // Check if the product price is within the filter price range
//         : true; // If no price range is specified, consider all products as a match

//       return matchesProductType && matchesPriceRange; // Return true if both filter conditions are met
//     });

//     setFilteredProducts(newFilteredProducts); // Update the 'filteredProducts' state with the newly filtered products
//   }, [filters, products]);

//   return (
//     <>
//       <div className="productbox">
//         {/* Input field and filter options go here */}
//         <ul className="productlist">
//           {filteredProducts.map((product) => (
//             <li key={product.id} className="productitem">
//               <h3>{product.title}</h3>
//               <br/><br/>
//               <img
//                 id={`productImage-${product.id}`} 
//                 className="productimage"
//                 src={`${process.env.PUBLIC_URL}${product.image}`}
//                 alt={product.title}
//               />
//               <br/><br/>
//               <p>{product.description}</p>
//               <p className="price">${product.price}</p>
//               <button className='addtocart' type="submit">Add to Cart</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default List;























// import React, { useState, useEffect } from 'react';
// import "../css/listobjects.css"


// const List = ({ filters }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:4000/api/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         // Initially, set filtered products to all products
//         setFilteredProducts(data);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     // Update filtered products when filters change
//     const newFilteredProducts = products.filter(product => {
//       const matchesProductType = filters.productType ? product.type.includes(filters.productType) : true;
//       const matchesPriceRange = filters.priceRange.length === 2
//         ? product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
//         : true;

//       return matchesProductType && matchesPriceRange;
//     });

//     setFilteredProducts(newFilteredProducts);
//   }, [filters, products]);

//   return (
//     <>
//     <div className="productbox">
//     {/* Input field and filter options go here */}
//     <ul className="productlist">
//       {filteredProducts.map((product) => (
//         <li key={product.id} className="productitem">
//           <h3>{product.title}</h3>
//           <br/>          <br/>
//           <img
//             id={`productImage-${product.id}`} 
//             className="productimage"
//             src={`${process.env.PUBLIC_URL}${product.image}`}
//             alt={product.title}
//           />
//           <br/>          <br/>
//           <p>{product.description}</p>
//           <p className="price">${product.price}</p>
//           <button className='addtocart' type="submit">Add to Cart</button>

//         </li>
//       ))}
//     </ul>
//   </div>
// </>

// );
// };

// export default List;
































// const List = ({ filters }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:4000/api/products')
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   // Filtering logic based on the received filters
//   const filteredProducts = products.filter(product => {
//     const matchesProductType = filters.productType ? product.type === filters.productType : true;
//     const matchesPriceRange = filters.priceRange
//       ? Array.isArray(filters.priceRange)
//         ? product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
//         : product.price === filters.priceRange
//       : true;

//     return matchesProductType && matchesPriceRange;
//   });

//   return (
//     <div>
//       <h1>List of Products</h1>

//       {/* Display filteredProducts instead of all products */}
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <img
//               src={`${process.env.PUBLIC_URL}${product.image}`}
//               alt={product.title}
//               style={{ maxWidth: '100px' }}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default List;
























// const List = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:4000/api/products')
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>List of Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <img
//   src={`${process.env.PUBLIC_URL}${product.image}`}
//   alt={product.title}
//   style={{ maxWidth: '100px' }}
// />

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default List;



















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [filterCriteria, setFilterCriteria] = useState({
//     price: '',
//     productType: '',
//   });

//   useEffect(() => {
//     // Fetch data from your server
//     axios.get('http://localhost:4000/api/products')
//       .then(response => {
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const handleFilterChange = (type, value) => {
//     setFilterCriteria({
//       ...filterCriteria,
//       [type]: value,
//     });
//   };

//   useEffect(() => {
//     // Apply filters when filterCriteria changes
//     let filtered = [...products];

//     if (filterCriteria.price !== '') {
//       filtered = filtered.filter(product => product.price <= parseFloat(filterCriteria.price));
//     }

//     if (filterCriteria.productType !== '') {
//       filtered = filtered.filter(product => product.type === filterCriteria.productType);
//     }

//     setFilteredProducts(filtered);
//   }, [filterCriteria, products]);

//   return (
//     <>
//       {/* Render your filter components here */}
//       {/* Example: <PriceFilter onChange={value => handleFilterChange('price', value)} /> */}
//       {/* Example: <TypeFilter onChange={value => handleFilterChange('productType', value)} /> */}

//       <div className="productbox">
//         {/* Map through filteredProducts and render each product */}
//         {filteredProducts.map(product => (
//           <div key={product.id}>
//             <p>{product.title}</p>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <img src={product.image} alt={product.title} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductsPage;
