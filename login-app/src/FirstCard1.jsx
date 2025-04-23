import Python from "../src/assets/Python.json";
import CodeExplainer from "../src/assets/CodeExplainer.json";
import CodeFlowChart from "../src/assets/CodeFlowChart.json";
import More from "../src/assets/More.json";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie-player";

import React, { useState } from "react"; //new


function FirstCard1() { 
	const navigate = useNavigate();
	
	const [codeInput, setCodeInput] = useState("");
	const [codeExplanation, setCodeExplanation] = useState(""); //new
	
	const handleCodeChange = (e) => {
	  const code = e.target.value;
	  setCodeInput(code);
	  setCodeExplanation(generateExplanation(code)); // custom logic function
	};

	
	
	const generateExplanation = (code) => {
	  const lines = code.split("\n");
	  let explanation = "";

	  lines.forEach((line, index) => {
	    if (line.includes("print")) {
	      explanation += `Line ${index + 1}: This prints a message to the console.\n`;
	    } else if (line.includes("for")) {
	      explanation += `Line ${index + 1}: This is a loop. It repeats a block of code.\n`;
	    } else if (line.includes("if")) {
	      explanation += `Line ${index + 1}: This checks a condition.\n`;
	    } else if (line.includes("def")) {
	      explanation += `Line ${index + 1}: This defines a function.\n`;
		}else if (line.includes(" = ")) {
		   explanation += `Line ${index + 1}: This declare the variable.\n`;
	    } else if (line.trim() === "") {
	      explanation += "";
	    } else {
	      explanation += `Line ${index + 1}: General code execution.\n`;
	    }
	  });

	  return explanation;
	};


  const styles = {
    container: {
		display: "flex",
		height: "100vh",
		minheight: "100vw",
		width: "100vw",  
	  
      background: "linear-gradient(to right, #11998e, #38ef7d)",
    },

    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      background: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
	card1:{
		width: "150px",
		height: "600px",
		marginTop :"30px",
		marginLeft: "20px",
		borderRadius: "5px",
		justifyContent: "center",
		display: "flex"
	},
	
	card2:{
				width: "1000px",
				height: "600px",
				marginTop :"30px",
				marginLeft: "30px",
				marginRight:"30px",
				borderRadius: "5px",
				backgroundColor:"palegreen",
				justifyContent: "center",
				display: "flex"
			},
			
			card3:{
							width: "700px",
							height: "600px",
							marginTop :"30px",
							marginRight:"20px",
							borderRadius: "5px",
						},
	
  };

  return (
	<div style={styles.container}>
	<div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
	<div class="card-group">
	  <div class="card" style={styles.card1}>
	  <div class="card-header"><Lottie 
	  	  		         loop 
	  	  		         animationData={Python} 
	  	  		         play 
	  	  		         style={{height:"50px"}} 
	  	  		       /></div>
	    <div class="card-body">
	      <button class="card-title" style={{fontSize:"15px", color:"ActiveCaption",backgroundColor:"palegreen",textAlign:"center"}}><b>Code Explainer</b>
		  						<Lottie 
		  	  	  		         loop 
		  	  	  		         animationData={CodeExplainer} 
		  	  	  		         play 
		  	  	  		         style={{width:"100%", cursor:"pointer"}} 
		  	  	  	       /></button>		  
		  <button class="card-title" style={{fontSize:"15px",textAlign:"center",backgroundColor:"white"}} onClick={() => navigate("/firstCard1Tool2")}><b>Code Flowchart</b>
		  								<Lottie 
		  		  	  	  		         loop 
		  		  	  	  		         animationData={CodeFlowChart} 
		  		  	  	  		         play 
		  		  	  	  		         style={{width:"100%", cursor:"pointer"}} 
		  		  	  	  		       /></button>
		  
		  <p class="card-title" style={{fontSize:"15px",textAlign:"center"}}><b>More Tools comming soon..</b>
		  <Lottie 
		  		  		  	  	  		         loop 
		  		  		  	  	  		         animationData={More} 
		  		  		  	  	  		         play 
		  		  		  	  	  		         style={{width:"100%",height:"100px", cursor:"pointer"}} 
		  		  		  	  	  		       /></p>
	    </div>
	    <div class="card-footer">
		<button type="button" class="btn btn-primary btn-sm" style={styles.button} onClick={() => navigate("/first")}
				onMouseOver={(e) => {
				    e.currentTarget.style.background = "blue"; // Darker green on hover
				    e.currentTarget.style.transform = "scale(1.1)";
				  }}
				  onMouseOut={(e) => {
				    e.currentTarget.style.background = "#28a745"; // Original color
				    e.currentTarget.style.transform = "scale(1)";
				  }}>Main Page</button></div>
	  </div>
	 </div>
	  <div class="card" style={styles.card2}>
	  <div style={{ display: "flex"}}>
	  
	  						<Lottie 
	    	  		         loop 
	    	  		         animationData={CodeExplainer}
	    	  		         play 
	    	  		         style={{height:"70px",}} 
	    	  		       /></div>
						   <form>
						     <div className="row mb-3">
						       <label htmlFor="inputCode" className="col-sm-2 col-form-label"></label>

						       <div className="col-sm-10" style={{ width: "90%", justifyContent: "center", marginLeft:"5%"}}>
							   <textarea
							     className="form-control mx-auto"
							     id="inputCode"
							     placeholder="Enter your PYTHON code here..."
							     value={codeInput}
							     onChange={handleCodeChange}
							     style={{ height: "500px", fontSize: "16px", resize: "inherit" }}
							   />

						       </div>
						     </div>
						   </form>


						  
		</div>
		<div class="card" style={styles.card3}>
		<div class="card-header">
		<div style={{ display: "flex"}} >	
		<p style={{color:"darkslateblue",marginTop :"10px"}}><b><div>Explanation </div>of Code</b></p>		
									<Lottie 
			    	  		         loop 
			    	  		         animationData={CodeExplainer}
			    	  		         play 
			    	  		         style={{height:"70px",}} 
			    	  		       /></div>
								   <form>
								   <div className="row mb-3">
								   <label htmlFor="inputCode" className="col-sm-2 col-form-label"></label>

								   	<div className="col-sm-10" style={{ width: "90%", marginLeft: "5%"}}>
									<textarea
									  className="form-control"
									  id="outputCode"
									  placeholder="Output related your PYTHON code will be displayed here..."
									  value={codeExplanation}
									  readOnly
									  style={{
									    height: "480px",
									    fontSize: "16px",
									    resize: "inherit",
									    backgroundColor: "palegreen",
									  }}
									/>

								   		</div>
								   		</div>
								   		</form>
								   
								   
								   </div>
								   
			</div>
			</div>
	</div>
  );
}


export default FirstCard1;
