import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ProdottiPage from "./Pages/ProdottiPage"
import DefaultLayout from "./Layout/DefaultLayout"
import ChiSiamo from "./Pages/ChiSiamo"
import ProdottoPage from "./Pages/ProdottoPage"
import Error from "./Pages/Error"
import BudgetContext from "./contexts/BudgetContext"
import { useState } from "react"
function App() {

  const [maxPrice, setMaxPrice] = useState(null)

  /*   function clickMode() {
      if (budgetMode === false) {
        setBudgetMode(true)
      } else {
        setBudgetMode(false)
      }
    } */


  return (
    <>
      <BudgetContext.Provider value={{ maxPrice, setMaxPrice }} >
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/prodotti" element={<ProdottiPage />} />
              <Route path="/prodotti/:id/*" element={<ProdottoPage />} />
              <Route path="*" element={<Error />} />
              <Route path="/contacts" element={<ChiSiamo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContext.Provider>
    </>
  )
}

export default App
