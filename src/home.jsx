
import React from 'react';

import Hero from "./components/hero.js"
import Carousel from './components/carousel.js';


// Define the main App component
const App = () => {
  return (
    <>
      {/* Render the Navbar component */}

      {/* Render the Hero component */}
      <Hero/>

      <br /><br />

      <h1 id="title">Look at our Offers!!.</h1>

      {/* Render the Carousel component */}
      <Carousel/>

      {/* Create a section for about us */}
      <section id="about">
        <div id="container">
          <h1 id="title2">About Us.</h1>

          <br />

          <div className="abouttext">
            <p>
              We are here to offer you our services <br />
              <br />
              Welcome to Electronic Hub, your ultimate destination for cutting-edge electronic devices and gadgets. <br /> At Electronic Hub, we take pride in providing a curated selection of the latest and most innovative technology solutions to meet all your electronic needs. Discover a world of possibilities as you explore our extensive range of products, from state-of-the-art smartphones to powerful laptops, smart home devices, and much more. Our store is designed to be your go-to hub for all things electronic, offering quality and reliability that you can trust.At Electronic Hub, we understand the importance of staying ahead in the rapidly evolving world of technology. That's why our knowledgeable and friendly staff is here to assist you, providing expert advice and guidance to ensure you make informed decisions about your electronic purchases.Whether you're a tech enthusiast, a professional seeking the latest gadgets, or someone looking for a thoughtful gift, Electronic Hub is the place to be. We are committed to delivering a seamless shopping experience, backed by excellent customer service and competitive prices.
              <br />
              <br /> What are you waiting come! <br /> Becomne our client we're
              waiting for you.
            </p>
          </div>
        </div>
      </section>

      {/* Render the Footer component */}
    </>
  );
}

export default App;
































// import React from 'react';
// import Footer from './components/footer.js';
// import Navbar from "./components/navbar.js"
// import Hero from "./components/hero.js"
// import Carousel from './components/carousel.js';

// // import Logo from "./image/Screenshot 2024-01-19 at 12.10.34 PM.png";


// const App = () => {
//   return (
// <>
//     <Navbar/>
//     <Hero/>
//     <br /><br />
//     <h1 id="title">Look at our Offers!!.</h1>
//     <Carousel/>

//     <section id="about">
//     <div id="container">
//       <h1 id="title2">About Us.</h1>
//       <br />
//       <div className="abouttext">
//         <p>
//           {" "}
//           We are here to offer you our services <br />
//           <br />
//           Welcome to Electronic Hub, your ultimate destination for cutting-edge electronic devices and gadgets. <br /> At Electronic Hub, we take pride in providing a curated selection of the latest and most innovative technology solutions to meet all your electronic needs. Discover a world of possibilities as you explore our extensive range of products, from state-of-the-art smartphones to powerful laptops, smart home devices, and much more. Our store is designed to be your go-to hub for all things electronic, offering quality and reliability that you can trust.At Electronic Hub, we understand the importance of staying ahead in the rapidly evolving world of technology. That's why our knowledgeable and friendly staff is here to assist you, providing expert advice and guidance to ensure you make informed decisions about your electronic purchases.Whether you're a tech enthusiast, a professional seeking the latest gadgets, or someone looking for a thoughtful gift, Electronic Hub is the place to be. We are committed to delivering a seamless shopping experience, backed by excellent customer service and competitive prices.
//           <br />
//           <br /> What are you waiting come! <br /> Becomne our client we're
//           waiting for you.
//         </p>
//       </div>
//     </div>
//   </section>
//    {/* Logo Section */}
//    {/* <div id="logo-section">
//    <img src={Logo} alt="" />
//       </div> */}
// <Footer/>

// </>
//   );
// }

// export default App;









