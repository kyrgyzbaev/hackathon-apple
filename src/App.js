import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AuthContextProvider from "./contexts/authContext";
import Routing from "./Routing";
import MacbookAirContextProvider from "./contexts/macbookAirContext";
import MacProContextProvider from "./contexts/macbookPro";
import Iphone13ProContextProvider from "./contexts/iphone13ProContext";
import Iphone13ContextProvider from "./contexts/iphone13Context";
import Iphone12ContextProvider from "./contexts/iphone12Context";
import AirpodsMaxContextProvider from "./contexts/airpodsMaxContext";
import AirpodsContextProvider from "./contexts/airpodsContext";
import CommentsContextProvider from "./contexts/commentsContext";
import MacbookProCartContextProvider from "./contexts/macbookProCart";

function App() {
  return (
    <AuthContextProvider>
      <MacbookAirContextProvider>
        <MacProContextProvider>
          <Iphone13ProContextProvider>
            <Iphone13ContextProvider>
              <Iphone12ContextProvider>
                <AirpodsMaxContextProvider>
                  <AirpodsContextProvider>
                    <CommentsContextProvider>
                      <MacbookProCartContextProvider>
                        <BrowserRouter>
                          <Header />
                          <Routing />
                          <Footer />
                        </BrowserRouter>
                      </MacbookProCartContextProvider>
                    </CommentsContextProvider>
                  </AirpodsContextProvider>
                </AirpodsMaxContextProvider>
              </Iphone12ContextProvider>
            </Iphone13ContextProvider>
          </Iphone13ProContextProvider>
        </MacProContextProvider>
      </MacbookAirContextProvider>
    </AuthContextProvider>
  );
}

export default App;
