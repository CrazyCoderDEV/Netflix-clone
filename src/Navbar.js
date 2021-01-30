import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix"
      />
      <img
        className="nav_avatar"
        src="https://www.flaticon.com/svg/vstatic/svg/3237/3237472.svg?token=exp=1611817324~hmac=da4b72eb31c43e9b46ce96dc4be8e489"
        alt="Avatar"
      />
    </div>
  );
}

export default Navbar;
