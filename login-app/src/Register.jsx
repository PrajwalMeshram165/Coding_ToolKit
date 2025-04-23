import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/send-otp", { mobile });
      alert(response.data); // Usually "OTP sent successfully"
      setIsOtpSent(true);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Failed to send OTP!");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/verify-otp", { mobile, otp });
      if (response.data === "OTP verified") {
        alert("OTP verified successfully");
        setIsOtpVerified(true);
      } else {
        alert("Invalid OTP");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("OTP verification failed!");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isOtpVerified) {
      alert("Please verify OTP first.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        username,
        password,
        mobile,
      });
      alert(response.data);
      navigate("/login");
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Registration failed!");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(to right, #11998e, #38ef7d)",
    },
    card: {
      background: "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      width: "500px",
      textAlign: "center",
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
      padding: "10px",
      background: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s ease",
	  marginBottom: "10px",
	  marginTop: "10px"
    },
    link: {
      color: "#28a745",
      cursor: "pointer",
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ color: "#28a745" }}>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <p><input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            style={styles.input}
          />
          {!isOtpSent && (
            <a type="link" onClick={sendOtp} style={styles.link}>
              Send OTP
            </a>
          )}</p>
          {isOtpSent && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                style={styles.input}
              />
              <a type="link" onClick={verifyOtp} style={styles.link}>
                Verify OTP
              </a>
            </>
          )}
          <button type="submit" style={styles.button} disabled={!isOtpVerified}>
            Register
          </button>
        </form>
        <p style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} style={styles.link}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
