import React from "react";

import Logo from "../../common/logo";

export default function About() {
  return (
    <>
      <section id="haqida" className="bg-gray-300 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <div
              data-aos="fade-up"
              className="flex justify-center align-middle"
            >
              <Logo />
            </div>
            <p data-aos="fade-up" className="mt-6 leading-relaxed text-lg">
              iT Center Beshariq 2021-yil 1-Noyabrda ochilgan <br />
              Hozirgi kunga kelib markazda tumanning eng yaxshi va malakali
              dasturchilari ishlaydi.<br />
              Bu yerda zamonaviy jihozlar, tekin WiFi va bo'sh vaqtda esa qolib
              o'z ishingiz yokida loyiha qilishingiz uchun qulay sharoitga ega xona
              ham mavjud.
            </p>
            <span
              data-aos="fade-up"
              className="inline-block h-1 w-10 rounded bg-[#7dba28] mt-8 mb-6"
            />
            <h2
              data-aos="fade-up"
              className="text-gray-900 font-medium title-font tracking-wider text-sm"
            >
              iT Center
            </h2>
            <p data-aos="fade-up" className="text-gray-500">
              Kelajaging o'z qo'lingda
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
