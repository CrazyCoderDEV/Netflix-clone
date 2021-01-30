import "./Navbar.css";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true)
      }
      else handleShow(false);
    })
  })

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix"
      />
      <img
        className="nav_avatar"
        src="https://www.flaticon.com/svg/vstatic/svg/727/727399.svg?token=exp=1611996397~hmac=976468c933f9590d4369b3e9c2c51f21"
        alt="Avatar"
      />
    </div>
  );
}

export default Navbar;
