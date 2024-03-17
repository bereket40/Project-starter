//importing react library from react in to this js file.
import React from 'react';
//Outlet is used to render the content of nested routes.
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Arrow Function
function Main() {
  return (
    <div>
      {/* Rendering the header, footer, and outlet component */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;

