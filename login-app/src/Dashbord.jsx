import { useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import Lottie from "react-lottie-player";
import animationData from "../src/assets/animation.json";

function Dashboard() {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      padding: "0 50px",
      background: "linear-gradient(to right, #4facfe, #00f2fe)",
    },
    card: {
      background: "rgba(255, 255, 255, 0.2)",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(10px)",
      width: "800px",
	  height: "600px",
      textAlign: "center",
      animation: "fadeIn 1s ease-in-out",
	  marginTop:"30px",

    },
    title: {
      color: "rgb(255, 105, 180)",
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    image: {
      width: "200px",
      height: "200px",
      marginBottom: "15px",
    },
    tagline: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#fff",
      marginBottom: "10px",
    },
    link: {
      color: "#007bff",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#0056b3",
    },
    animationContainer: {
      width: "500px",
      height: "500px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}><b><i>Code Tool-Kit</i></b></h1>
	       <Lottie 
	         loop 
	         animationData={animationData} 
	         play 
	         style={{ width: "100%", height: "60%" }} 
	       />
		   


		   <div>
		     <h4 style={{ color: "orange" }}>
		       <Typewriter 
		         words={['Code smarter – visualize your logic instantly!']}
		         loop={false}
		         cursor
		         cursorStyle="|"
		         typeSpeed={50}
		         deleteSpeed={200}
		         delaySpeed={15500}
		       />
		     </h4>

		     <h4 style={{ color: "white" }}>
		       <Typewriter 
		         words={['Visualize, analyze, and simplify your code structure.']}
		         loop={false}
		         cursor
		         cursorStyle="|"
				 typeSpeed={100}
				 deleteSpeed={175}
				 delaySpeed={14500}
		       />
		     </h4>

		     <h4 style={{ color: "green" }}>
		       <Typewriter 
		         words={['From text to tech art – your code, beautifully diagrammed.']}
		         loop={false}
		         cursor
		         cursorStyle="|"
				 typeSpeed={150}
				 deleteSpeed={150}
				 delaySpeed={13500}
		       />
		     </h4>
		   </div>
   
    <h5 style={{ marginTop: "30px", color: "#ffeOb2"}}>
      Ready to Welcome You! ❤️❤️❤️ {" "}
      <span 
        onClick={() => navigate("/login")} 
        style={styles.link} 
        onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
        onMouseOut={(e) => (e.target.style.color = styles.link.color)}
      >
        Login
      </span> or {" "}
      <span 
        onClick={() => navigate("/register")} 
        style={styles.link} 
        onMouseOver={(e) => (e.target.style.color = styles.linkHover.color)}
        onMouseOut={(e) => (e.target.style.color = styles.link.color)}
      >
            Register
          </span>
        </h5>
      </div>
    </div>
  );
}

export default Dashboard;
