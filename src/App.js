import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ProductDetails } from "./pages";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
