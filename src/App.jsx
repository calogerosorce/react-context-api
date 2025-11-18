import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ProdottiPage from "./Pages/ProdottiPage"
import DefaultLayout from "./Layout/DefaultLayout"
import ChiSiamo from "./Pages/ChiSiamo"
import ProdottoPage from "./Pages/ProdottoPage"
import Error from "./Pages/Error"
function App() {


  return (
    <>
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
    </>
  )
}

export default App
