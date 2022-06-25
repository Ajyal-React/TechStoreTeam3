import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ProductDetails } from "./pages";
import GlobalStyle from "./GlobalStyles";
import LogIn from "./components/LogIn/index";
import SignUp from "./components/SignUp";
import ShowFeatured from "./components/ShowFeatured";
import Search from "./General/Search";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* <Route path="/Search" element={<Search />} /> */}
        <Route path="/Category" element={<ShowFeatured />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
