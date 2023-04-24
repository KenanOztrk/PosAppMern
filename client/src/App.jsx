import { BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/auth/Register";
import CartPage from "./pages/CartPage";
import CustomerPage from "./pages/CustomerPage";
import HomePage from "./pages/HomePage";
import InvoicePage from "./pages/InvoicePage";
import StatisticPage from "./pages/StatisticPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = { <HomePage /> } />
          <Route path="/cart" element = { <CartPage /> } />
          <Route path="/invoices" element = { <InvoicePage/> } />
          <Route path="/customers" element = { <CustomerPage/> } />
          <Route path="/statistic" element = { <StatisticPage/> } />
          <Route path="/register" element = { <Register/> } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
