import React from "react";
import rasm from "./1.jpg";
import rasm2 from "./2.jpg";
import rasm3 from "./3.jpg";
import rasm4 from "./4.jpg";
import rasm5 from "./5.jpg";
import rasm6 from "./6.jpg";
export default function Markaz() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1
              data-aos="fade-right"
              className="sm:text-3xl text-2xl font-bold title-font text-[#7dba28] lg:w-1/3 lg:mb-0 mb-4"
            >
              Dasturchilar haqida qisqacha.
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div data-aos="fade-right" className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-500 w-full object-cover h-full object-center block"
                  src={rasm}
                />
              </div>
              <div data-aos="fade-right" className=" md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-500 w-full object-cover h-full object-center block"
                  src={rasm2}
                />
              </div>
              <div data-aos="fade-right" className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-500 w-full h-full object-cover object-center block"
                  src={rasm3}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div data-aos="fade-left" className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-500 w-full h-full object-cover object-center block"
                  src={rasm4}
                />
              </div>
              <div data-aos="fade-left" className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  l
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-500 w-full object-cover h-full object-center block"
                  src={rasm5}
                />
              </div>
              <div data-aos="fade-left" className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-500 w-full object-cover h-full object-center block"
                  src={rasm6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
