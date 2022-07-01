import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AuthContextProvider from "./contexts/authContext";
import Routing from "./Routing";
import MacsContextProvider from "./contexts/macsContext";

function App() {
  return (
    <AuthContextProvider>
      <MacsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </MacsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
