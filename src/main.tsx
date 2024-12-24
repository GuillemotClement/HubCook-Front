import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router";
import RootLayout from "./layout/RootLayout/RootLayout.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import RecipeList from "./pages/Recipe/RecipeList/RecipeList.tsx";
import RecipeDetail from "./pages/Recipe/RecipeDetail/RecipeDetail.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <Routes>
        <Route element={<RootLayout />} >
          <Route index element={<HomePage />} />
          <Route path="recipes">
            <Route index element={<RecipeList />}/>
            <Route path=":id" element={<RecipeDetail />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
