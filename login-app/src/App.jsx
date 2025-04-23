import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashbord from "./Dashbord"; // Correct spelling if necessary
import First from "./First";
import FirstCard1 from "./FirstCard1";
import FirstCard1Tool2 from "./FirstCard1Tool2"
import FirstCard2 from "./FirstCard2";
import FirstCard2Tool2 from "./FirstCard2Tool2"
import FirstCard3 from "./FirstCard3";
import FirstCard3Tool2 from "./FirstCard3Tool2"




import Logo from "../src/assets/Logo.png";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  
  const navigate = useNavigate();
  

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
	  
	  <div style={navbarContainer}>
	  	<nav class="navbar navbar-expand-lg" style={navbar}>
	  	<div class="container-fluid">
	  	<a class="navbar-brand" style={{cursor: "pointer"}}><span onClick={() => navigate("/first")}>
	  			              <img src={Logo} style={logoStyle}></img>
	  			            </span></a>
	  	    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	  	      <span class="navbar-toggler-icon"></span>
	  	    </button>
	  	    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
	  	      <ul class="navbar-nav">
	  	        <li class="nav-item">
	  	          <a class="nav-link active" aria-current="page" href="#">Know about us</a>
	  	        </li>
	  	        <li class="nav-item">
	  	          <a class="nav-link" href="#">Features</a>
	  	        </li>
	  	        <li class="nav-item">
	  	          <a class="nav-link" href="#">Prime Zome</a>
	  	        </li>
	  	        <li class="nav-item dropdown">
	  	     
	  	          <ul class="dropdown-menu">
	  	            <li><a class="dropdown-item" href="#">Action</a></li>
	  	            <li><a class="dropdown-item" href="#">Another action</a></li>
	  	            <li><a class="dropdown-item" href="#">Something else here</a></li>
	  	          </ul>
	  	        </li>
	  	      </ul>
	  	    </div>
	      </div>
	  	</nav>
	  	</div>

      <Routes>
        <Route path="/" element={<Dashbord />} /> {/* Default page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/first" element={<First />} />
		<Route path="/firstCard1" element={<FirstCard1 />}/>
		<Route path="/firstCard1Tool2" element={<FirstCard1Tool2/>}/>
		<Route path="/firstCard2" element={<FirstCard2 />}/>
		<Route path="/firstCard2Tool2" element={<FirstCard2Tool2/>}/>
		<Route path="/firstCard3" element={<FirstCard3 />}/>
		<Route path="/firstCard3Tool2" element={<FirstCard3Tool2/>}/>


      </Routes>
    </div>
  );
}



const logoStyle = {
  width: "55px",
  height: "35px",
  borderRadius: "30%",
  objectFit: "cover",
  border: "1px solid #ccc",
};

const navbarContainer= {
	      display: "flex",
	      justifyContent: "center",
	      alignItems: "center",
	      height: "80px", // Adjust height as needed
		  backgroundColor: "black",
	    };
		const navbar= {
			position: "absolute",
			    top: "10px",
			    left: "50%",
			    display: "flex",
			    justifyContent: "center",
				transform: "translateX(-50%)",
			    alignItems: "center",
				width: "100%",
			    backgroundColor: "#99FF99",
			    padding: "10px",
			    borderRadius: "5px",
			    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
		    };

export default App;
