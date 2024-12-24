import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootLayout from "./layout/RootLayout/RootLayout.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import RecipePage from "./pages/RecipePage/RecipePage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <Routes>
        <Route element={<RootLayout />} >
          <Route index element={<HomePage />} />
          <Route path="recipes" element={<RecipePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <RootLayout />
  </StrictMode>,
)
