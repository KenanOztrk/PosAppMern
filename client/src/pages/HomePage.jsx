import CartTotal from "../components/cart/CartTotal";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header"
import Products from "../components/products/Products";
const HomePage = () => {
  return (
    <>
    <Header></Header>
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
        <div className="categories 
        overflow-auto max-h-[calc(100vh_-_112px)]
        md:pb-10">
          <Categories></Categories>
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
          <Products></Products>
        </div>
        <div className="cart-wrapper min-w-[300px] md: -mt-[24px] md: -mr-[24px] border">
          <CartTotal></CartTotal>
        </div>
      </div>
    </>
  )
}

export default HomePage