import React, { Component } from "react";
import "./css/process.css";
import { Link } from "react-router-dom";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = { key: "Dashboard" };
  }

  componentDidMount() {
    console.log("Hello");
  }
  render() {
    return (
      <div className="experience">
        <div className="experience_left">
          <div className="progressBar">
            <div className="progress">
              <div
                style={{
                  padding: "1em",
                  width: "15px",
                  height: "15px",
                  border: "1px solid green",
                  textAlign: "center",
                  borderRadius: "100%",
                }}
              >
                1
              </div>
              <p>Experience</p>
            </div>
            <div
              className="bar"
            ></div>
            <div className="progress">
              <div
                style={{
                  padding: "1em",
                  width: "15px",
                  height: "15px",
                  border: "1px solid grey",
                  textAlign: "center",
                  borderRadius: "100%",
                }}
              >
                2
              </div>
              <p>Zoom Consultant</p>
            </div>
            <div
              className="bar"
            ></div>
            <div className="progress">
              <div
                style={{
                  padding: "1em",
                  width: "15px",
                  height: "15px",
                  border: "1px solid grey",
                  textAlign: "center",
                  borderRadius: "100%",
                }}
              >
                3
              </div>
              <p>Design Fees</p>
            </div>
          </div>
        </div>
        <div className="experience_right">
          <p >
            How much experience do you have ?
          </p>
          <div className="selector">
            <select name="company" id="company">
              
            </select>
            <Link to="/zoom">
              <button id="next" className="next_button">
                Next
              </button>
            </Link>
          </div>
        </div>

       
      </div>
    );
  }
}
export default Process;
