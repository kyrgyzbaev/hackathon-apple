import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AuthContextProvider from "./contexts/authContext";
import Routing from "./Routing";
import MacsContextProvider from "./contexts/macsContext";
import MacbookAirContextProvider from "./contexts/macbookAirContext";
import MacProContextProvider from "./contexts/macbookPro";

function App() {
  return (
    <AuthContextProvider>
      <MacsContextProvider>
        <MacbookAirContextProvider>
          <MacProContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
              <Footer />
            </BrowserRouter>
          </MacProContextProvider>
        </MacbookAirContextProvider>
      </MacsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
