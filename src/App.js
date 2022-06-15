import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import GlobalStyle from "./GlobalStyles";
// import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
