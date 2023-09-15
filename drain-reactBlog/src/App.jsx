import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";


function App() {
  return (
    <>
    <Box position={"sticky"} top={0} zIndex={100}>
    <Navbar/>
    <Header/>
    </Box>
    <AllRoutes/>
    <Footer />
    </>
  );
}

export default App;
