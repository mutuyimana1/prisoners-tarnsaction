import React from "react";
import "../views/home.css";
function Header() {
  return (
    <div>
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/sendmoney">MakeTransaction</a>
              </li>

              <li>
                <a>Claims </a>
              </li>
              <li>
                <a> SubmitQuestions</a>
              </li>
              <li>
                <a href="/login"> Login/Register</a>
              </li>
            </ul>
            {/* 
            <div className="button">
              <h2>Login</h2>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
