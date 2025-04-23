import React, { useState } from "react";
import Java from "../src/assets/Java.json";
import CodeExplainer from "../src/assets/CodeExplainer.json";
import CodeFlowChart from "../src/assets/CodeFlowChart.json";
import More from "../src/assets/More.json";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie-player";

function FirstCard2Tool2() {
  const navigate = useNavigate();

  const [codeInput, setCodeInput] = useState("");
  const [mermaidCode, setMermaidCode] = useState("");

  const generateMermaidFlowchart = () => {
    const lines = codeInput.split("\n");
    let mermaidSyntax = "graph TD\n";
    let nodeCount = 0;
   

    const getNodeId = () => String.fromCharCode(65 + nodeCount++); // A, B, C, ...

    let lastNode = "A";
    mermaidSyntax += `    ${lastNode}[Start]\n`;

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      if (!line) continue;

      let currentNode = getNodeId();

      if (line.startsWith("if")) {
        const condition = line.replace("if", "").replace(":", "").trim();
        mermaidSyntax += `    ${lastNode} --> ${currentNode}{if ${condition}}\n`;

        // Handle the next line (assumed to be true block)
        let trueNode = getNodeId();
        let trueLine = lines[i + 1]?.trim();
        if (trueLine && !trueLine.startsWith("else")) {
          mermaidSyntax += `    ${currentNode} -->|True| ${trueNode}[${trueLine}]\n`;
        }

        // Handle else case if exists
        if (lines[i + 2]?.trim().startsWith("else")) {
          let falseNode = getNodeId();
          let falseLine = lines[i + 3]?.trim();
          if (falseLine) {
            mermaidSyntax += `    ${currentNode} -->|False| ${falseNode}[${falseLine}]\n`;
            lastNode = getNodeId();
            mermaidSyntax += `    ${falseNode} --> ${lastNode}[End]\n`;
          }
        } else {
          lastNode = getNodeId();
          mermaidSyntax += `    ${trueNode} --> ${lastNode}[End]\n`;
        }

        break; // Stop after if-else block for this simple version
      } else if (line.startsWith("for") || line.startsWith("while")) {
        mermaidSyntax += `    ${lastNode} --> ${currentNode}([Loop: ${line}])\n`;
        lastNode = currentNode;
      } else if (line.startsWith("return")) {
        mermaidSyntax += `    ${lastNode} --> ${currentNode}([Return: ${line}])\n`;
        lastNode = currentNode;
      } else {
        mermaidSyntax += `    ${lastNode} --> ${currentNode}([${line}])\n`;
        lastNode = currentNode;
      }
    }

    mermaidSyntax += `    ${lastNode} --> Z[End]`;
    setMermaidCode(mermaidSyntax);
  };

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
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
    card1: {
      width: "150px",
      height: "600px",
      marginTop: "30px",
      marginLeft: "20px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "left",
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
      display: "flex",
      justifyContent: "flexEnd",
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        {/* Card 1 */}
        <div className="card-group">
          <div className="card" style={styles.card1}>
            <div className="card-header">
              <Lottie loop animationData={Java} play style={{ height: "50px" }} />
            </div>
            <div className="card-body">
              <button className="card-title" style={{ fontSize: "15px", textAlign: "center", backgroundColor: "white" }} onClick={() => navigate("/firstCard2")}>
                <b>Code Explainer</b>
                <Lottie loop animationData={CodeExplainer} play style={{ width: "100%", cursor: "pointer" }} />
              </button>
              <button className="card-title" style={{ fontSize: "15px", color: "ActiveCaption", backgroundColor: "palegreen", textAlign: "center" }} >
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
          <div style={{ display: "flex" }}>
            <Lottie loop animationData={CodeFlowChart} play style={{ height: "70px" }} />
          </div>
          <div className="row mb-3">
            <label htmlFor="inputCode" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10" style={{ width: "90%", justifyContent: "center", marginLeft: "5%" }}>
              <textarea
                className="form-control mx-auto"
                id="inputCode"
                placeholder="Enter your code here..."
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                style={{ height: "420px", fontSize: "16px", resize: "inherit" }}
              />
              <button
                type="button"
                onClick={generateMermaidFlowchart}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Generate Flowchart
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card" style={styles.card3}>
          <div className="card-header">
            <div style={{ display: "flex" }}>
              <p style={{ color: "darkslateblue", marginTop: "10px" }}>
                <b>Flowchart of Code</b>
              </p>
              <Lottie loop animationData={CodeFlowChart} play style={{ height: "70px" }} />
            </div>
            <div className="row mb-3">
              <label htmlFor="outputCode" className="col-sm-2 col-form-label"></label>
              <div className="col-sm-10" style={{ width: "90%", marginLeft: "5%" }}>
                <textarea
                  className="form-control"
                  id="outputCode"
                  placeholder="Output will be displayed here..."
                  value={mermaidCode}
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

export default FirstCard2Tool2;
