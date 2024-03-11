import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; 

const Navbar = () => {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light-mode');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [shoppingListVisible, setShoppingListVisible] = useState(false);

//   const [loginVisible, setLoginVisible] = useState(false);
// const [signupVisible, setSignupVisible] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', mode === 'dark-mode');
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light-mode' ? 'dark-mode' : 'light-mode'));
  };

  const toggleSidebar = () => {
    setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleShoppingList = () => {
    setShoppingListVisible((prev) => !prev);
  };

  const toggleSearch = () => {
    setSearchActive((prevSearchActive) => !prevSearchActive);
  };

//   const toggleLogin = () => {
//   setLoginVisible((prev) => !prev);
//   setSignupVisible(false); // Close signup window if open
// };

// const toggleSignup = () => {
//   setSignupVisible((prev) => !prev);
//   setLoginVisible(false); // Close login window if open
// };

  return (
 
<div>
     
    <div className="navbar-container">
      <nav>
        <div className="nav-bar">
          <i className='bx bx-menu sidebarOpen' onClick={toggleSidebar}></i>
          <span className="logo navLogo">
            <a href="/">ElectronicHub</a>
          </span>

          <div className={`menu ${sidebarOpen ? 'active' : ''}`}>
            <div className="logo-toggle">
              <span className="logo">
                <a href="/">ElectronicHub</a>
              </span>
              <i className='bx bx-x siderbarClose' onClick={closeSidebar}></i>
            </div>

            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><a className="aboutbtn" href="/#about">About us</a></li>
              <li>
                <a href="#">Pages</a>
                <ul className="dropdown-menu">
                  <li><Link to="/listOfObject">Products</Link></li>
                  <li> <Link to="/contact">Contact</Link></li>
                  {/* Add more dropdown items as needed */}
                </ul>
              </li>
              <li><a href="#">Log in</a></li>
              <li><a href="#">Sign up</a></li>
            </ul>
          </div>

          <div className="darkLight-searchBox">
            <div className="dark-light" onClick={toggleMode}>
              <i className={`bx ${mode === 'dark-mode' ? 'bx-moon' : 'bx-sun'}`}></i>
            </div>

            <div className="searchBox">
              <div className={`searchToggle ${searchActive ? 'active' : ''}`} onClick={toggleSearch}>
                <i className='bx bx-x cancel'></i>
                <i className='bx bx-search search'></i>
              </div>

              <div className="search-field">
                <input type="text" placeholder="Search..." />
                <i className='bx bx-search'></i>
              </div>
          </div>
          {/* Shopping cart icon with click event */}
          <div className={`shopping-cart ${shoppingListVisible ? 'active' : ''}`} onClick={toggleShoppingList}>
          <i className={`bx ${shoppingListVisible ? 'bx-x' : 'bx-cart'}`}></i>
        </div>
      </div>
        {/* Floating window for shopping list */}
      {shoppingListVisible && (
        <div className="floating-window">
          <div className="shopping-list">
            {/* Add your shopping list content here */}
            <p>Your shopping list content goes here.</p>
            {/* You can add more elements as needed */}
            <button className='shoopinglistbtn'>Take it Home</button>
          </div>  
          
          </div>
      )} 

 {/* ////////////////////////////////////////////////////////////////*/}
 
{/* Login icon with click event */}
{/* <div className={`login ${loginVisible ? 'active' : ''}`} onClick={toggleLogin}>
  <i className={`bx ${loginVisible ? 'bx-x' : 'bx-log-in'}`}></i>
</div> */}
{/* {loginVisible && (
  <div className="floating-window">
    <div className="login-form">
      {/* Add your login form content here */}
      {/* <p>Login form goes here.</p> */}
      {/* You can add more form elements as needed */}
      {/* <button className='login-btn'>Login</button>
    </div>
  </div>
)} */} 


{/* Signup icon with click event */}
{/* <div className={`signup ${signupVisible ? 'active' : ''}`} onClick={toggleSignup}>
  <i className={`bx ${signupVisible ? 'bx-x' : 'bx-user-plus'}`}></i>
</div>
{signupVisible && (
  <div className="floating-window">
    <div className="signup-form"> */}
      {/* Add your signup form content here */}
      {/* <p>Signup form goes here.</p> */}
      {/* You can add more form elements as needed */}
      {/* <button className='signup-btn'>Sign Up</button>
    </div>
  </div>
)} */}
      {/* ///////////////////////////////////////////////////////////////////// */}
        </div>
        
      </nav>
    </div>
    </div>

  );
};

export default Navbar;


