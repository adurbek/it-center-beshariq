import HeaderImage from "../../common/logost.png";
import NetComponent from "./banner";
import "./baner.css"

export default function BannerTrailerItem(props) {
  function handleScroll(headerID) {
    const headerId = document.getElementById("headerID");
    const { scrollY } = window;
    scrollY > 10
      ? headerId.current?.classList.add("active")
      : headerId.current?.classList.remove("active");
  }
  return (
    <div id="bosh" className="h-[60vh]  md:h-[100vh] w-full bg-white ">
      <div className="z-10 repeate-Effect absolute w-full h-[100vh] flex items-center justify-center">
        <div className="justify-center w-full items-center mx-auto">
          <img
            data-aos="fade-up"
            className="w-[300px] mx-auto"
            src={HeaderImage}
            alt=""
          />
          <h1
            data-aos="fade-up"
            className="text-[40px] font-semibold mx-auto text-center text-white"
          >
            Beshariq tumani filiali
          </h1>
          <p
            data-aos="fade-up"
            className="sm:p-5 max-w-[600px] text-center text-white mx-auto mt-5"
          >
            Axborot texnologiyalari (inglizcha: Information Technology(IT)) — bu
            kompyuter tizimlari, dasturiy taʼminot, dasturlash tillari,
            maʼlumotlar, maʼlumotlarni qayta ishlash va saqlashni oʻz ichiga
            olgan tegishli sohalar toʻplami.
          </p>
          <button
            data-aos="fade-up"
            className="hero__btn font-semibold rounded-full w-[260px] h-[55px] justify-center flex mt-11 mx-auto items-center bg-[#7dba28] transition delay-300 hover:bg-transparent duration-700 hover:border-[2.5px] hover:border-[#7dba28] text-2xl text-white border-spacing-0"
          >
            {" "}
            <a href="#haqida">Batafsil</a>
          </button>
        </div>
      </div>
      <div className="w-full h-[100vh]">
        <NetComponent className="opacity-10" />
      </div>
    </div>
  );
}
