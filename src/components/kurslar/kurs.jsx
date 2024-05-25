import React from "react";
import itc from "../../common/Logo_IT_Park_Uzbekistan.svg.png";
import web from "./Algoritmik_dasturlash_1627468540.png";
import sovod from "./comp.d7d3082.png";
import grafik from "./Grafik_dizayn.png";
import poy from "./poy2.png"
// import "./kurslar.css";
export default function Kurs() {
  return (
    <>
      <marquee
        scrollamount="10"
        direction="right"
        className="sm:text-4xl text-white bg-[#7dba28] font-semibold text-2xl"
      >
        {/* <img src={} alt="" /> */}
      </marquee>
      <section
        id="kurslar"
        className="cursor-default text-gray-500 body-font py-16"
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="hidden lg:block lg:w-1/2 w-full mb-10 lg:mb-0 rounded-full overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center  w-full"
              src={itc}
            />
          </div>
          <div className="w-[100%] flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div
              data-aos="fade-up-left"
              className="flex flex-col mb-10 lg:items-start items-center bir"
            >
              <div className="mt-25 md:flex w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5">
                <img src={web} alt="web" />
              </div>
              <div className="flex-grow">
                <h2 className="text-[#7dba28] text-2xl title-font font-medium mb-3">
                  Web Dasturlash
                </h2>
                <p className="leading-relaxed text-base">
                  Web dasturlash kursida ikki yo'nalishda o'qish imkoniyatiga
                  egasiz.
                </p>
                
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              className="flex flex-col mb-10 lg:items-start items-center"
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5">
                <img src={sovod} alt="savod" />
              </div>
              <div className="flex-grow">
                <h2 className="text-[#7dba28] text-2xl title-font font-medium mb-3">
                  Kompyuter sovodxonligi
                </h2>
                <p className="leading-relaxed text-base">
                  Kompyuter sovodxonligida sizga kompyuterni 0 dan o'rganish
                  imkoniga ega bo'lasiz.
                </p>
                
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              className="flex flex-col mb-10 lg:items-start items-center uch"
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5">
                <img src={grafik} alt="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-[#7dba28] text-2xl title-font font-medium mb-3">
                  Grafik Dizayn
                </h2>
                <p className="leading-relaxed text-base">
                  Grafik dizayn kursimida UI|UX dizayini va yana bir qancha
                  dizayinlar.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
