import {
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import CuisinsPage from "./pages/CuisinsPage";
import {CuisinProvider} from './CuisinContext'
import { DietProvider } from "./DietContext";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./components/SingleRecipe";
import NotFound from "./components/NotFound";
import Diets from "./pages/Diets";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import MainHeadApp from "./mainHead";


function App() {
  return (
    <div>
      <MainHeadApp />
      <Navbar />
      <CuisinProvider>
        <DietProvider>
      <Routes>
        <Route path='*' element={<NotFound />} />
        
        <Route path="/" element={<Home />} />
        
        <Route path="/cuisins" element={<CuisinsPage />} />
        <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<SingleRecipe />} />

        <Route path="/diets" element={<Diets />} />
        
        <Route path="search/:term" element={<Search />} />

      </Routes>
      
      <Footer />

        
        </DietProvider>
      </CuisinProvider>
    </div>
  );
}

export default App;
