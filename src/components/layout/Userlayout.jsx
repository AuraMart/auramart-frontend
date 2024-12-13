/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../../components/Navigation/Navbar";
import FooterSection from "../../components/Footer/FooterSection";

function Homelayout({ children }) {
  return (
    <div className="items-center justify-center w-full align-middle">
      <div className="">
        {/* Navbar */}
        <NavBar/>

        {/* Content */}
        <div className=" pt-14">
          {children}
        </div>

        {/* Footer */}
        <FooterSection/>
      </div>
    </div>
  );
}

export default Homelayout;
