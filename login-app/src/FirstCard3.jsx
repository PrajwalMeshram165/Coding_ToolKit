import React, { useState } from "react";
import Cp from "../src/assets/C.json";
import CodeExplainer from "../src/assets/CodeExplainer.json";
import CodeFlowChart from "../src/assets/CodeFlowChart.json";
import More from "../src/assets/More.json";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie-player";

function FirstCard3() {
  const navigate = useNavigate();
  const [codeInput, setCodeInput] = useState("");
  const [codeExplanation, setCodeExplanation] = useState("");

  const handleCodeChange = (e) => {
    const code = e.target.value;
    setCodeInput(code);
    setCodeExplanation(generateExplanation(code));
  };

  const generateExplanation = (code) => {
    const lines = code.split("\n");
    let explanation = "";

    lines.forEach((line, index) => {
      if (line.includes("#include")) {
        explanation += `Line ${index + 1}: This is a preprocessor directive to include standard libraries.\n`;
      } else if (line.includes("int main")) {
        explanation += `Line ${index + 1}: This is the main function, the entry point of a C program.\n`;
      } else if (line.includes("printf")) {
        explanation += `Line ${index + 1}: This prints output to the console.\n`;
      } else if (line.includes("scanf")) {
        explanation += `Line ${index + 1}: This reads input from the user.\n`;
      } else if (line.includes("if")) {
        explanation += `Line ${index + 1}: This is an if statement for conditional logic.\n`;
      } else if (line.includes("for") || line.includes("while")) {
        explanation += `Line ${index + 1}: This is a loop for iteration.\n`;
      } else if (line.includes("return")) {
        explanation += `Line ${index + 1}: This ends the main function and returns a value.\n`;
      } else if (line.includes("=")) {
        explanation += `Line ${index + 1}: Variable assignment or initialization.\n`;
      } else if (line.trim() === "") {
        explanation += "";
      } else {
        explanation += `Line ${index + 1}: General logic or expression.\n`;
      }
    });

    return explanation;
  };

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(to right, #11998e, #38ef7d)",
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
    card1: {
      width: "150px",
      height: "600px",
      marginTop: "30px",
      marginLeft: "20px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "center",
    },
    card2: {
      width: "1000px",
      height: "600px",
      marginTop: "30px",
      marginLeft: "30px",
      marginRight: "30px",
      borderRadius: "5px",
      backgroundColor: "palegreen",
      display: "flex",
      justifyContent: "center",
    },
    card3: {
      width: "700px",
      height: "600px",
      marginTop: "30px",
      marginRight: "20px",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        {/* Card 1 */}
        <div className="card-group">
          <div className="card" style={styles.card1}>
            <div className="card-header">
              <Lottie loop animationData={Cp} play style={{ height: "50px" }} />
            </div>
            <div className="card-body">
              <button
                className="card-title"
                style={{
                  fontSize: "15px",
                  color: "ActiveCaption",
                  backgroundColor: "palegreen",
                  textAlign: "center",
                }}
              >
                <b>Code Explainer</b>
                <Lottie loop animationData={CodeExplainer} play style={{ width: "100%", cursor: "pointer" }} />
              </button>
              <button
                className="card-title"
                style={{ fontSize: "15px", textAlign: "center", backgroundColor: "white" }}
                onClick={() => navigate("/firstCard3Tool2")}
              >
                <b>Code Flowchart</b>
                <Lottie loop animationData={CodeFlowChart} play style={{ width: "100%", cursor: "pointer" }} />
              </button>
              <p className="card-title" style={{ fontSize: "15px", textAlign: "center" }}>
                <b>More Tools coming soon..</b>
                <Lottie loop animationData={More} play style={{ width: "100%", height: "100px", cursor: "pointer" }} />
              </p>
            </div>
            <div className="card-footer">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                style={styles.button}
                onClick={() => navigate("/first")}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "blue";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#28a745";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Main Page
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card" style={styles.card2}>
          <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "start" }}>
            <Lottie loop animationData={CodeExplainer} play style={{ height: "70px" }} />
            <textarea
              className="form-control mx-auto"
              id="inputCode"
              placeholder="Enter your C code here..."
              value={codeInput}
              onChange={handleCodeChange}
              style={{ height: "500px", fontSize: "16px", resize: "inherit", width: "90%" }}
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="card" style={styles.card3}>
          <div className="card-header">
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ color: "darkslateblue", marginTop: "10px" }}>
                <b>Explanation of Code</b>
              </p>
              <Lottie loop animationData={CodeExplainer} play style={{ height: "70px" }} />
            </div>
            <div className="row mb-3">
              <div className="col-sm-10" style={{ width: "90%", marginLeft: "5%" }}>
                <textarea
                  className="form-control"
                  id="outputCode"
                  placeholder="Output will be displayed here..."
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCard3;
