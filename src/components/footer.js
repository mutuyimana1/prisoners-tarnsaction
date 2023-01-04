import React from "react";
import "../views/home.css";
import "./footer.css";
import MessageIcon from "@mui/icons-material/Message";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
function Footer() {
  return (
    <div>
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

export default Footer;
