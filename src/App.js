import "./assets/tailwid.css";




import BannerTrailerItem from "./components/banner/banner-trailer";
import Kurs from "./components/kurslar/kurs";
import Footer from "./components/footer/footer";
import Hodimlar from "./components/hodim/hodimlar";
import About from "./components/about/about";
import Markaz from "./components/markaz/markaz";
import Tillar from "./components/tillar/tillar";
import Reytinglar from "./components/reyting/reytinglar";
import React, { useEffect } from "react";


import AOS from "aos";
import "aos/dist/aos.css";
import Reklama from "./components/reklama/reklama";
import Header from "./common/header";
import Retriv from "./pages/retriv";
import Portfolio from "./components/portfolio/portfolio";
function MyApp() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Header />
      <BannerTrailerItem />
      <Kurs />
      <Reytinglar />
      <Portfolio />
      <Markaz />
      <Hodimlar />
      <Reklama />
      <Tillar />
      <About />
      <Retriv />
      <Footer />

    </>
  );
}

export default MyApp;
