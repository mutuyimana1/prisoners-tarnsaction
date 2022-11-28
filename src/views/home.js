import React from "react";
import "./home.css";
import money from "../assets/images/pexels-cottonbro-studio-5909808.jpg";
function Home() {
  return (
    <div className="home-container">
      <header>
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <h2>
                <span>T</span>rans<span>P</span>r
              </h2>
            </div>
            <ul>
              <li>
                <a>Home</a>{" "}
              </li>
              <li>
                <a>MakeTransaction</a>
              </li>

              <li>
                <a>Claims </a>
              </li>
              <li>
                <a> SubmitQuestions</a>
              </li>
            </ul>

            <div className="button">
              <h2>Get started</h2>
            </div>
          </div>
        </div>
      </header>
      <div className="home-background">
        <div className="background-content">
          <h2>
            Make your Transaction & it will be derivered to your inmate very
            soon as possible
          </h2>
          <div className="buttons">
            <button className="button btn">How is it done</button>
            <button className="button btn"> Make Transaction</button>
          </div>
        </div>
      </div>
      <main className="home-main">
        <div className="main-part1">
          <h2>Our core services</h2>
          <p>
            Make your Transaction & it will be derivered to your <br /> inmate
            very soon as possible <br />
            Make your Transaction & it will be derivered to your <br /> inmate
            very soon as possible
          </p>
          <button className="button btn">View more</button>
        </div>
        <div className="main-part2">
          <div className="card-left">
            <div className="card-leftOne">
              <img src={money} />
              <p>card oneasdDsdvasfvfvfvffvv</p>
            </div>

            <div className="card-leftTwo">
              <img src={money} />
              <p>card oneasdDsdvasfvfvfvffvv</p>
            </div>
          </div>

          <div className="card-right">
            <img src={money} />
            <p>card oneasdDsdvasfvfvfvffvv</p>
          </div>
        </div>
      </main>

      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default Home;
