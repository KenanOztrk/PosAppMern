import { BrowserRouter, Routes, Route} from "react-router-dom";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
