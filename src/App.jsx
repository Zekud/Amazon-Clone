import "./app.scss";
import Header from "./components/header/Header";
import CarouselSlider from "./components/carousel/Carousel";
import Categroy from "./components/category/Categroy";
import Product from "./components/product/Product";
function App() {
  return (
    <>
      <Header />
      <CarouselSlider />
      <Categroy />
      <Product />
    </>
  );
}

export default App;
