import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import NewNavbar from "./components/NewNavbar";


function App() {
  return (
    <>
    <Box position={"sticky"} top={0} zIndex={100}>
    <Navbar/>
    <NewNavbar/>
    </Box>
    <AllRoutes/>
    <Footer />
    </>
  );
}

export default App;
