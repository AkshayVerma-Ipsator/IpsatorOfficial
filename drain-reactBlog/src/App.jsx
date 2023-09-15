import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AllRoutes/>
      <Footer />
    </>
  );
}

export default App;
