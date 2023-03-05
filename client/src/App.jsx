import { BrowserRouter, Routes, Route} from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import InvoicePage from "./pages/InvoicePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = { <HomePage /> } />
          <Route path="/cart" element = { <CartPage /> } />
          <Route path="/invoices" element = { <InvoicePage/> } />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
