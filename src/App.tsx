import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePath } from "./constants/route";
import MoviesCategory from "./pages/MoviesCategory";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={routePath.home} element={<Home />} />
          <Route path={routePath.categories} element={<MoviesCategory />} />
          <Route path={routePath.invalid} element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
