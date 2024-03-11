import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import List from "./listOfObject.jsx";
import Contact from "./contact.jsx";
import Footer from './components/footer.js';
import Navbar from "./components/navbar.js"
// Import the necessary CSS file

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Navbar/>

          {/* Define the routes using the React Router */}
          <Routes>
            {/* Set the home route */}
            <Route path="/" element={<Home />} />
            
            {/* Set the route for the list of objects */}
            <Route path="/listOfObject" element={<List />} />

            {/* Set the contact route */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer/>

      </Router>
    </div>
  );
}

export default App;


// drop the link of your hosted front-end  and Github Repo at the start of the presentation
// demo the site and show responsiveness of one page (please spend less than 1 minute)
// components created
// show your routes created
// display your database
// be mindful of time - each person has a 10min window that includes time for questions.