import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OtherBooks from "./components/OtherBooks";
import Banner from "./components/Banner";
import PlayStore from "./components/PlayStore";
import AllBooks from "./components/AllBooks";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [order, setOrder] = React.useState(false);

  const handleOrder = () => {
    setOrder(!order);
  };
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="scroll-smooth bg-white dark:bg-gray-900 dark:text-white duration-200 ">
        <Navbar handleOrder={handleOrder}></Navbar>
        <Hero handleOrder={handleOrder}></Hero>
        <OtherBooks handleOrder={handleOrder}></OtherBooks>
        <Banner></Banner>
        <PlayStore></PlayStore>
        <AllBooks></AllBooks>
        <Testimonial></Testimonial>
        <Footer></Footer>
        <Popup handleOrder={handleOrder} order={order}></Popup>
      </div>
    </>
  );
}

export default App;
