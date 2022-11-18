import React from "react";
import "./home.css";
function Home() {
  return (
    <div className="home-container">
      <h3>Routing URL are as follows</h3>

      <h2>/</h2>
      <h2>
        <a href="/login">/Login</a>{" "}
      </h2>
      <h2>
        <a href="/register">/register</a>{" "}
      </h2>
      <h2>
        <a href="/dashboard">/dashboard</a>{" "}
      </h2>
      <h2>
        {" "}
        <a href="/allprisoner">/allprisoners</a>
      </h2>
      <h2>
        <a href="/registerprisoner"></a>{" "}
      </h2>
    </div>
  );
}

export default Home;
