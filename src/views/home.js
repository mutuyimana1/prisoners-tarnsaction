import React from "react";
import "./home.css";
import MessageIcon from "@mui/icons-material/Message";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import money from "../assets/images/pexels-cottonbro-studio-5909808.jpg";
import message from "../assets/images/undraw_Modern_life_re_8pdp.png";
import undraw from "../assets/images/undraw_Credit_card_payment_re_o911.png";
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
      <div className="home-background">
        <div className="home-opacity">
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
          <div className="home-text">
            <h1>Let us support our Inmates</h1>
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
        <div className="home-services">
          <div className="servicesCardOne"></div>
          <div className="servicesCardTwo"></div>
        </div>
      </main>

      <div className="About-content">
        <div className="About-image">
          <img src={undraw} />
        </div>
        <div className="About-text">
          <h2>
            <b>
              We provide a solution through quick and efficiency transaction
            </b>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            <br />
            and scrambled it to make a type specimen book. It has survived not
            <br />
            only five centuries, but also the leap into electronic typesetting,
            <br />
            remaining essentially unchanged
          </p>
        </div>
      </div>

      <div className="home-contact">
        <div className="contact-one">
          <h1>Chart with us</h1>
          <h1>
            <b>Let's talk About our product to you!!</b>
          </h1>
        </div>
        <div className="contact-two">
          <div>
            <button
              style={{
                marginTop: "100px",
                width: "200px",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              Contact with Us
              <ArrowCircleRightIcon style={{ marginLeft: "5px" }} />
            </button>
          </div>

          <div>
            <img src={message} style={{ width: "400px" }} />
          </div>
        </div>
      </div>
      <div className="comment">
        <div className="comment-partone">
          <h3>
            Leave comment about our services so that our service will be more
            effectivelly and efficiantlly
          </h3>
        </div>
        <div className="comment-parttwo">
          <h3>your email</h3>
          <button className="comment-button">Leave a comment</button>
        </div>
      </div>

      <div className="footer">
        <div className="col-3 column-footer">
          <h1>Logo </h1>
        </div>
        <div className="col-3 cols-footer">
          <MessageIcon /> <ArrowCircleRightIcon />
        </div>
        <div className="col-3 col-footer" style={{ color: "white" }}>
          &copy; Prisons support Team
        </div>
        <div className="col-3 columns-footer">
          <p>content</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
