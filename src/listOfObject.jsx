import React, { useState, useEffect } from 'react';
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import List from './components/list';

const ListOfObject = () => {
  const [productTypeFilter, setProductTypeFilter] = useState('');
  const [priceRangeMin, setPriceRangeMin] = useState('');
  const [priceRangeMax, setPriceRangeMax] = useState('');
  const [searchBy, setSearchBy] = useState('productType'); // Default to searching by product type
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Update filters when inputs change
    setFilters({
      productType: searchBy === 'productType' ? productTypeFilter : '',
      priceRange: searchBy === 'price' ? [priceRangeMin, priceRangeMax] : [],
    });
  }, [searchBy, productTypeFilter, priceRangeMin, priceRangeMax]);

  // Console log to check the current filters
  console.log(filters);

  return (
    <>
      <div>
        <h1 id='titlelist'>List of Products</h1>
        <div>
          <select className='dropdownmenu1' value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
            <option value="productType">Search by Product Type</option>
            <option value="price">Search by Price</option>
          </select>
          {searchBy === 'productType' && (
            <input 
              type="text"
              placeholder="Product Type"
              value={productTypeFilter}
              onChange={(e) => setProductTypeFilter(e.target.value)}
              className="your-custom-class" 
              style={{  border:' 1px solid #9a9797',
                borderRadius: '10px',
                padding:'5px',
                margin: '10px',
                marginBottom: '20px',}}
            />
          )}
          {searchBy === 'price' && (
            <>
              <input className='textmenu'
                type="number"
                placeholder="Min Price"
                value={priceRangeMin}
                onChange={(e) => setPriceRangeMin(e.target.value)}
              />
              <input className='textmenu'
                type="number"
                placeholder="Max Price"
                value={priceRangeMax}
                onChange={(e) => setPriceRangeMax(e.target.value)}
              />
            </>
          )}
        </div>
      </div>
      <List filters={filters} />
    </>
  );
}

export default ListOfObject;


// import React, { useState, useEffect } from 'react';
// import Navbar from "./components/navbar"
// import Footer from "./components/footer"
// import List from './components/list';

// const ListOfObject = () => {
//   const [productTypeFilter, setProductTypeFilter] = useState('');
//   const [priceRangeMin, setPriceRangeMin] = useState('');
//   const [priceRangeMax, setPriceRangeMax] = useState('');
//   const [searchBy, setSearchBy] = useState('productType'); // Default to searching by product type
//   const [filters, setFilters] = useState({});

//   useEffect(() => {
//     // Update filters when inputs change
//     setFilters({
//       productType: searchBy === 'productType' ? productTypeFilter : '',
//       priceRange: searchBy === 'price' ? [priceRangeMin, priceRangeMax] : [],
//     });
//   }, [searchBy, productTypeFilter, priceRangeMin, priceRangeMax]);

//   return (
//     <>
//       <div>
//         <h1 id='titlelist'>List of Products</h1>
//         <div>
//           <select className='dropdownmenu1' value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
//             <option value="productType">Search by Product Type</option>
//             <option value="price">Search by Price</option>
//           </select>
//           {searchBy === 'productType' && (
//             <input 
//               type="text"
//               placeholder="Product Type"
//               value={productTypeFilter}
//               onChange={(e) => setProductTypeFilter(e.target.value)}
//               className="your-custom-class" 
//               style={{  border:' 1px solid #9a9797',
//                 borderRadius: '10px',
//                 padding:'5px',
//                 margin: '10px',
//                 marginBottom: '20px',}}
//             />
//           )}
//           {searchBy === 'price' && (
//             <>
//               <input className='textmenu'
//                 type="number"
//                 placeholder="Min Price"
//                 value={priceRangeMin}
//                 onChange={(e) => setPriceRangeMin(e.target.value)}
//               />
//               <input className='textmenu'
//                 type="number"
//                 placeholder="Max Price"
//                 value={priceRangeMax}
//                 onChange={(e) => setPriceRangeMax(e.target.value)}
//               />
//             </>
//           )}
//         </div>
//       </div>
//       <List filters={filters} />
//       console.log(List)
//     </>
//   );
// }

// export default ListOfObject;



























// import React, { useState } from 'react';
// // import Dron from "../image/dron.jpeg"
// // import Camera from "../image/camera.jpg"
// // import Headphones from "../image/headphones.jpg"
// import Navbar from "./components/navbar"
// import Footer from "./components/footer"
// import List from './components/list';

// const ListOfObject = () => {
//   const [productTypeFilter, setProductTypeFilter] = useState('');
//   const [priceRangeMin, setPriceRangeMin] = useState('');
//   const [priceRangeMax, setPriceRangeMax] = useState('');
//   const [searchBy, setSearchBy] = useState('productType'); // Default to searching by product type

//   const handleFilter = () => {
//     // Convert priceRangeMin and priceRangeMax to numbers
//     const min = priceRangeMin === '' ? 0 : Number(priceRangeMin);
//     const max = priceRangeMax === '' ? Infinity : Number(priceRangeMax);

//     // Pass filter criteria to the List component
//     const filters = {
//       productType: searchBy === 'productType' ? productTypeFilter : '',
//       priceRange: searchBy === 'price' ? [min, max] : [],
//     };

//     return <List filters={filters} />;

//   };

//   return (
//     <>

   

// <div>
//       {/* Title */}
//       <h1 id='titlelist'>List of Products</h1>

//       {/* Input fields and dropdown for filtering */}
 
//       <div>
//         <select className='dropdownmenu1' value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
//           <option value="productType">Search by Product Type</option>
//           <option value="price">Search by Price</option>
//         </select>
//         {searchBy === 'productType' && (
//   <input 
//     type="text"
//     placeholder="Product Type"
//     value={productTypeFilter}
//     onChange={(e) => setProductTypeFilter(e.target.value)}
//     className="your-custom-class" 
//     style={{  border:' 1px solid #9a9797',
//       borderRadius: '10px',
//       padding:'5px',
//       margin: '10px',
//       marginBottom: '20px',}}
//   />
// )}
// {searchBy === 'price' && (
//   <>
//     <input className='textmenu'
//       type="number"
//       placeholder="Min Price"
//       value={priceRangeMin}
//       onChange={(e) => setPriceRangeMin(e.target.value)}
//     />
//     <input className='textmenu'
//       type="number"
//       placeholder="Max Price"
//       value={priceRangeMax}
//       onChange={(e) => setPriceRangeMax(e.target.value)}
//     />
//           </>
//         )}
//         {/* <button className='dropdownmenu2' onClick={handleFilter}>Apply Filters</button> */}
//       </div>
//       {handleFilter()}
//       {/* List component with filtering props */}
    
//      </div>
   
 
//     </> 
    
    
//   );
// }

// export default ListOfObject;































// const ListOfObject = () => {
//   const [productTypeFilter, setProductTypeFilter] = useState('');
//   const [priceRangeFilter, setPriceRangeFilter] = useState('');
//   const [searchBy, setSearchBy] = useState('productType'); // Default to searching by product type

//   const handleFilter = () => {
//     // Convert priceRangeFilter to a number if it represents a range
//     const processedPriceRange = priceRangeFilter.includes('-')
//       ? priceRangeFilter.split('-').map(Number)
//       : Number(priceRangeFilter);

//     // Pass filter criteria to the List component
//     const filters = {
//       productType: productTypeFilter,
//       priceRange: processedPriceRange,
//     };

//     // Assuming List component accepts filters as props
//     // Modify the List component to filter the products based on these props
//     // For example, <List filters={filters} />
//     return <List filters={filters} />;
//   };

//   return (
//     <>
//       {/* <Navbar /> */}

//       {/* Title */}
//       <h1>List of Products</h1>

//       {/* Input fields and dropdown for filtering */}
//       <div>
//         <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
//           <option value="productType">Search by Product Type</option>
//           <option value="price">Search by Price</option>
//         </select>
//         {searchBy === 'productType' && (
//           <input
//             type="text"
//             placeholder="Product Type"
//             value={productTypeFilter}
//             onChange={(e) => setProductTypeFilter(e.target.value)}
//           />
//         )}
//         {searchBy === 'price' && (
//           <input
//             type="text"
//             placeholder="Price Range"
//             value={priceRangeFilter}
//             onChange={(e) => setPriceRangeFilter(e.target.value)}
//           />
//         )}
//         <button onClick={handleFilter}>Apply Filters</button>
//       </div>

//       {/* List component with filtering props */}
//       {handleFilter()}

//       <Footer />
//     </>
//   );
// }

// export default ListOfObject;
















// export default function listOfObject() {
//   return (
  
//     <>
//   <Navbar/>
//   <List/>
//   <Footer/>
// </>
//   )
// }









/////////////////////


// <div className="productbox">
//     <div className="title">Our Offers List.</div>
//     <div id="box" className="container">
//       <div className="one">
//         {" "}
//         {/*changes*/}
//         <p id="texttop">HP Elite Desktop PC Computer</p>
//         <br />
//         <br />
//         <img id="PC" src="galery/P.C..jpg" alt="P.C." />
//         <br />
//         <p>
//           <a
//             id="price"
//             href="https://www.amazon.com/HP-Computer-Quad-Core-Keyboard-Bluetooth/dp/B09YXBCXS9/ref=sr_1_3?crid=2WCJQA6OQ9JF2&keywords=pc&qid=1696437505&sprefix=pc%2Caps%2C120&sr=8-3&th=1"
//           >
//             $189.99
//           </a>
//         </p>
//         <p>
//           {" "}
//           - Intels Quad-Core Processor, with Windows 10 Installed; Browse the
//           web, stream video, and stay productive with lag-free professional
//           grade multi-tasking.
//         </p>
//       </div>
//       <div className="two">
//         <p id="texttop">Alienware Aurora R15 Gaming Desktop</p>
//         <br />
//         <br />
//         <img id="alien" src="galery/alienware.jpg" alt="Alienware" />
//         <br />
//         <p>
//           <a
//             id="price"
//             href="https://www.amazon.com/Alienware-Aurora-R15-Gaming-Desktop/dp/B0C6FJGWK9/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.26abd864-41de-4663-b956-74ef0d53e0d2%3Aamzn1.sym.26abd864-41de-4663-b956-74ef0d53e0d2&crid=2WCJQA6OQ9JF2&cv_ct_cx=pc&keywords=pc&pd_rd_i=B0C6FJGWK9&pd_rd_r=dda7b599-a500-43a7-ad3f-1405d680ca13&pd_rd_w=Pxf59&pd_rd_wg=LDYFr&pf_rd_p=26abd864-41de-4663-b956-74ef0d53e0d2&pf_rd_r=ZJ5KK20M53RJ6MSE5W94&qid=1696437505&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=pc%2Caps%2C120&sr=1-2-2b34d040-5c83-4b7f-ba01-15975dfb8828-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1"
//           >
//             $2,799.99
//           </a>
//         </p>
//         <p>
//           {" "}
//           - POWERFUL GAMING PROCESSOR: Designed for gamers and creators with the
//           new generation of Intel Core i9-13900F processor.
//         </p>
//       </div>
//       <div className="three">
//         <p id="texttop">
//           INSIGNIA 42-inch Class F20 Series Smart Full HD 1080p Fire TV.
//         </p>
//         <br />
//         <img id="tv" src="galery/smart.tv.jpeg" alt="TV" />
//         <br />
//         <p>
//           <a
//             id="price"
//             href="https://www.amazon.com/INSIGNIA-42-inch-Class-Smart-NS-42F201NA23/dp/B0BCMND272/ref=sr_1_6?crid=3LXO147H571WB&keywords=tv&qid=1696437533&sprefix=tv%2Caps%2C91&sr=8-6"
//           >
//             $159.99
//           </a>
//         </p>
//         <p>
//           {" "}
//           - 1080p resolution View your favorite movies, shows and games in high
//           definition. Alexa voice control.
//         </p>
//       </div>
//       <div className="four">
//         <p id="texttop">
//           Nintendo Switch™ with Neon Blue and Neon Red Joy‑Con™.
//         </p>
//         <br />
//         <br />
//         <img id="nintendo" src="galery/switch.jpeg" alt="swicht" />
//         <p>
//           <a
//             id="price"
//             href="https://www.amazon.com/Nintendo-SwitchTM-Neon-Blue-Joy%E2%80%91ConTM-Switch/dp/B0BFJWCYTL/ref=sr_1_1?crid=2EBA4Z080KL8B&keywords=wii%2Bswitch&qid=1696437563&sprefix=wii%2Bsw%2Caps%2C96&sr=8-1&th=1"
//           >
//             $299.00
//           </a>
//         </p>
//         <p>
//           {" "}
//           - 6.2” LCD screen Three play modes: TV, tabletop, and handheld Local
//           co-op, online, and local wireless multiplayer Detachable Joy-Con
//           controllers.
//         </p>
//       </div>
//       <div className="five">
//         <p id="texttop">
//           Headphones Wireless Bluetooth 70 Hours Playtime Bluetooth Headphones
//           with Microphone.
//         </p>
//         <br />
//         <br />
//         <img id="headphones" src="galery/headphones.jpg" alt="Headphones" />
//         <p>
//           <a
//             id="price"
//             href="https://www.amazon.com/Headphones-Bluetooth-Microphone-Lightweight-Callphones/dp/B0C596SLX2/ref=sr_1_2_sspa?crid=2E8JEOWM2GHU6&keywords=headphones%2Bwireless%2Bbluetooth&qid=1696437613&sprefix=head%2Caps%2C95&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
//           >
//             $16.99
//           </a>
//         </p>
//         <p>
//           {" "}
//           - Bluetooth headphones feature advanced dual 40mm dynamic sound units
//           and 3 EQ modes, designed for audiophiles.
//         </p>
//       </div>
//       <div className="six">
//         <p id="texttop">
//           SAMSUNG Galaxy S23+ Plus Cell Phone, Factory Unlocked Android
//           Smartphone.
//         </p>
//         <br />
//         <br />
//         <img id="phone" src="galery/phone.jpg" alt="cellphone" />
//         <p>
//           <a
//             id="price"
//             href="https://www.amazon.com/SAMSUNG-Factory-Unlocked-Smartphone-Adaptive/dp/B0BLP4J9RR/ref=sr_1_2_sspa?crid=KNGC2AYLY9ET&keywords=phones&qid=1696437649&sprefix=phones%2Caps%2C102&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
//           >
//             $999.99
//           </a>
//         </p>
//         <p>
//           {" "}
//           - FASTEST MOBILE PROCESSOR AVAILABLE: Smoothly switch between apps
//           with our fastest processor ever.
//         </p>
//       </div>
//       <div className="seven">
//         <p id="texttop">Canon EOS 850D / Creative Filter Set.</p>
//         <br />
//         <br />
//         <img id="cam" src="galery/camera.jpg" alt="camera" />
//         <br />
//         <p>
//           <a
//             id="price"
//             href="https://www.amazon.com/Canon-18-55mm-Creative-Electronics-Cleaning/dp/B0B9F9H3Y5/ref=sr_1_7_sspa?crid=1ISYR3Q71ZTUO&keywords=professional+camera+canon&qid=1696437707&sprefix=profesional+camera%2Caps%2C87&sr=8-7-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1"
//           >
//             $939.95
//           </a>
//         </p>
//         <p>
//           {" "}
//           - Bundle Items Include: 1 x Canon EOS 850D DSLR Camera with 18-55mm
//           Lens | 1 x SanDisk 64GB Extreme PRO UHS-I SDXC Memory Card.
//         </p>
//       </div>
//       <div className="eight">
//         <p id="texttop">4K Video Camera Camcorder 48MP.</p>
//         <br />
//         <br />
//         <img id="videocamera" src="galery/videocam.jpg" alt="videocam" />
//         <br />
//         <p>
//           <a
//             id="price"
//             href="https://www.amazon.com/Camcorder-Vlogging-Microphone-Anti-Shake-Plus/dp/B0B3VCKX5S/ref=sr_1_1_sspa?crid=299VSIK4O6EFX&keywords=video+camera&qid=1696462191&sprefix=video%2Caps%2C184&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
//           >
//             $149.99
//           </a>
//         </p>
//         <p>
//           {" "}
//           - This 2023 latest 4k Plus version camera adopts 6-Axis anti-shake
//           technology to improve high-precision stabilization while shooting.
//         </p>
//       </div>
//       <div className="nine">
//         <p id="texttop">
//           DJI - Mini 3 Pro Drone and Remote Control with Built-in Screen (DJI
//           RC)
//         </p>
//         <br />
//         <img id="dron" src="galery/dron.jpeg" alt="videocam" />
//         <p>
//           <a
//             id="price"
//             href="https://www.bestbuy.com/site/dji-mini-3-pro-drone-and-remote-control-with-built-in-screen-dji-rc-gray/6503238.p?skuId=6503238"
//           >
//             $909.99
//           </a>
//         </p>
//         <p>
//           {" "}
//           - This mini-sized, mega-capable DJI Mini 3 Pro is just as powerful as
//           it is portable. Weighing less than 249 g and with upgraded safety
//           features.
//         </p>
//       </div>
//       <div className="ten">
//         <p id="texttop">Arlo - Pro 4 Spotlight Camera Security Bundle.</p>
//         <br />
//         <br />
//         <img id="secams" src="galery/seguritycams.jpeg" alt="videocam" />
//         <p>
//           <a
//             id="price"
//             href="https://www.bestbuy.com/site/arlo-pro-4-spotlight-camera-security-bundle-3-wire-free-cameras-indoor-outdoor-2k-with-color-night-vision-12-pieces-white/6454736.p?skuId=6454736"
//           >
//             $279.99
//           </a>
//         </p>
//         <p>
//           {" "}
//           - Includes cloud recordings of video clips at 2K or lower resolution
//           for 30 days. Renewal of an Arlo Secure plan is required to maintain
//           Arlo Secure features.
//         </p>
//       </div>
//       <div className="eleven">
//         <p id="texttop">
//           Microsoft Surface Pro 9, 13" Touch-Screen Intel Core i5, 16GB Memory.
//         </p>
//         <br />
//         <img id="laptop" src="galery/laptop.jpeg" alt="videocam" />
//         <p>
//           <a
//             id="price"
//             href="https://www.bestbuy.com/site/microsoft-surface-pro-9-13-touch-screen-intel-core-i5-16gb-memory-256gb-ssd-with-surface-pro-keyboard-graphite/6560599.p?skuId=6560599"
//           >
//             $1,099.99
//           </a>
//         </p>
//         <p>
//           {" "}
//           - Blazing-fast Pro performance with 12th Gen Intel Core processors on
//           select configurations and up to 15.5 hours of battery life.
//         </p>
//       </div>
//       <div className="twelve">
//         <p id="texttop">Xbox Series X 1TB Console, Diablo IV Bundle, Black.</p>
//         <br />
//         <br />
//         <img id="xbox" src="galery/XBOX.jpeg" alt="videocam" />
//         <p>
//           <a
//             id="price"
//             href="https://www..com/site/microsoft-xbox-series-x-1tb-console-diablo-iv-bundle-black/6537717.p?skuId=6537717"
//           >
//             $559.99
//           </a>
//         </p>
//         <p>
//           {" "}
//           - Xbox Velocity Architecture. Fight for the fate of Sanctuary with the
//           fastest, most powerful Xbox ever.
//         </p>
//       </div>
//     </div>
//   </div>