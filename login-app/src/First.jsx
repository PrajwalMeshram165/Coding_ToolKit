import Python from "../src/assets/Python.json";
import Java from "../src/assets/Java.json";
import C from "../src/assets/C.json";

import Lottie from "react-lottie-player";


import { useNavigate } from "react-router-dom";

function First() { 
	const navigate = useNavigate();
	 
  const styles = {
    container: {
	  display: "flex",
	  justifyContent: "center",	
	  height: "100vh",
      minheight: "100vw",
      width: "100vw",  
      background: "linear-gradient(to right, #11998e, #38ef7d)",
    },
	button: {
	  width: "90%",
	  display: "block",
	  margin: "10px auto", /* Centers the button horizontally */
	  padding: "10px",
	  background: "#28a745",
	  color: "white",
	  borderRadius: "5px",
	  cursor: "pointer",
	  transition: "background 0.3s ease",
	},

	
	card1:{
		width: "500px",
		height: "500px",
		marginLeft: "50px",
		marginTop: "50px",
		borderRadius: "15px",
	},
	
	card2:{
				width: "500px",
				height: "500px",
				marginLeft: "50px",
				marginTop: "50px",
				borderRadius: "15px",
			},
	
	card3:{
			width: "500px",
			height: "500px",
			marginTop: "50px",
			marginRight: "50px",
			marginLeft: "50px",
			borderRadius: "15px",
		},
		
	image:{
		width: "100%",
		height: "150px",
		borderRadius: "5px",
		padding: "1px",
		
		
	}
	

  };

  return (
	<div style={styles.container}>
	<div class="card-group">
	  <div class="card" style={styles.card1}
	  onMouseOver={(e) => {
	      e.currentTarget.style.background = "white"; // Darker green on hover
	      e.currentTarget.style.transform = "scale(1.1)";
	    }}
	    onMouseOut={(e) => {
	      e.currentTarget.style.background = "white"; // Original color
	      e.currentTarget.style.transform = "scale(1)";
	    }}>
	  <div class="card-header"><h2 style={{color:"darkslateblue"}}>PYTHON</h2></div>
	  <Lottie 
	  		         loop 
	  		         animationData={Python} 
	  		         play 
	  		         style={styles.image} 
	  		       />
	    <div class="card-body">
	      <h5 class="card-title">Python Tool-Kit</h5>
	      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
	    </div>
	    <div class="card-footer">
		<button type="button" class="btn btn-primary btn-sm" style={styles.button} onClick={() => navigate("/firstCard1")}
		onMouseOver={(e) => {
		    e.currentTarget.style.background = "blue"; // Darker green on hover
		    e.currentTarget.style.transform = "scale(1.1)";
		  }}
		  onMouseOut={(e) => {
		    e.currentTarget.style.background = "#28a745"; // Original color
		    e.currentTarget.style.transform = "scale(1)";
		  }}>View 👉👉</button>
	    </div>
	  </div>
	  <div class="card" style={styles.card2} 
	  onMouseOver={(e) => {
	        e.currentTarget.style.background = "white"; // Darker green on hover
	        e.currentTarget.style.transform = "scale(1.1)";
	      }}
	      onMouseOut={(e) => {
	        e.currentTarget.style.background = "white"; // Original color
	        e.currentTarget.style.transform = "scale(1)";
	      }}>
	  <div class="card-header"><h2 style={{color:"darkslateblue"}}>JAVA</h2></div>
	  <Lottie 
	  		         loop 
	  		         animationData={Java} 
	  		         play 
	  		         style={styles.image} 
	  		       />	    <div class="card-body">
	      <h5 class="card-title">Java Tool-Kit</h5>
	      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
	    </div>
	    <div class="card-footer">
		<button type="button" class="btn btn-primary btn-sm" style={styles.button} onClick={() => navigate("/firstCard2")}
		onMouseOver={(e) => {
		    e.currentTarget.style.background = "blue"; // Darker green on hover
		    e.currentTarget.style.transform = "scale(1.1)";
		  }}
		  onMouseOut={(e) => {
		    e.currentTarget.style.background = "#28a745"; // Original color
		    e.currentTarget.style.transform = "scale(1)";
		  }}>View 👉👉</button>
	    </div>
	  </div>
	  <div class="card" style={styles.card3}
	  onMouseOver={(e) => {
	        e.currentTarget.style.background = "white"; // Darker green on hover
	        e.currentTarget.style.transform = "scale(1.1)";
	      }}
	      onMouseOut={(e) => {
	        e.currentTarget.style.background = "white"; // Original color
	        e.currentTarget.style.transform = "scale(1)";
	      }}>
	  <div class="card-header"><h2 style={{color:"darkslateblue"}}>C++</h2></div>
	  <Lottie 
	  		         loop 
	  		         animationData={C} 
	  		         play 
	  		         style={styles.image} 
	  		       />	    <div class="card-body">
	      <h5 class="card-title">C++ Tool-Kit</h5>
	      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
	    </div>
	    <div class="card-footer">
		<button type="button" class="btn btn-primary btn-sm" style={styles.button} onClick={() => navigate("/firstCard3")}
		onMouseOver={(e) => {
		    e.currentTarget.style.background = "blue"; // Darker green on hover
		    e.currentTarget.style.transform = "scale(1.1)";
		  }}
		  onMouseOut={(e) => {
		    e.currentTarget.style.background = "#28a745"; // Original color
		    e.currentTarget.style.transform = "scale(1)";
		  }}>View 👉👉</button>
	    </div>
		</div>
	  </div>
	</div>
  );
}

export default First;
