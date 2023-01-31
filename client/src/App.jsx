import CartTotal from "./components/cart/CartTotal";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header"
import Products from "./components/products/Products";
function App() {
  return (
    <>
      <Header></Header>
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories 
        overflow-auto max-h-[calc(100vh-_-112px)]
        pb-64">
          <Categories></Categories>
        </div>
        <div className="products flex-[8]">
          <Products></Products>
        </div>
        <div className="cart-wrapper min-w-[300px] md: -mt-[24px] md: -mr-[24px] border">
          <CartTotal></CartTotal>
        </div>
      </div>
    </>
  );
}

export default App;
