import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ProductDetails } from "./pages";
import GlobalStyle from "./GlobalStyles";
import LogIn from "./components/LogIn/index";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
