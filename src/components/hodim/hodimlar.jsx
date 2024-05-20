import React from "react";
import Nodirbek from "./Nodirbek.jpg";
import Nurbek from "./Nurbek.jpg";
import Ibratjon from "./Ibratjon.jpg";
import Muhiddin from "./Muhiddin.jpg";
import Shohbozbek from "./Shohbozbek.jpg";
import Durbek from "./Durbek.jpg";
import Ibrohimjon from "./Ibrohimjon.jpg";
// icon
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";

export default function Hodimlar() {
  return (
    <>
      <section id="hodimlar" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1
              data-aos="fade-up"
              className="text-2xl font-bold title-font mb-4 text-[#7dba28]"
            >
              Markaz hodimlari
            </h1>
            <p
              data-aos="fade-up"
              className="lg:w-2/3 mx-auto leading-relaxed text-base"
            >
              Hodimlar haqida qisqacha ma'lumot.
            </p>
          </div>
          <div className="flex justify-center flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div
                data-aos="fade-up"
                className=" bg-[#7dba28] rounded-xl h-full flex flex-col items-center text-center"
              >
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Nodirbek}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-white">
                    Nodirbek
                  </h2>
                  <h3 className="text-white mb-3">Ish Boshqaruvchi</h3>
                  <p className="mb-4 text-white">
                    Birnima unversitetini tamomlagan 4 yillik ish tajribasiga
                    ega ish boshqaruvchi.
                  </p>
                  <span className="inline-flex">
                    <a className="text-blue-600 text-2xl">
                      <ImFacebook2 />
                    </a>
                    <a
                      href="https://www.instagram.com/n_tursunaliyev/"
                      className="ml-2 text-2xl text-red-600"
                    >
                      <GrInstagram />
                    </a>
                    <a
                      href="https://t.me/Nodirbek_0114"
                      className="ml-2 text-2xl text-blue-600"
                    >
                      <SiTelegram />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div
                data-aos="fade-up"
                className="bg-[#7dba28] rounded-xl h-full flex flex-col items-center text-center"
              >
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Nurbek}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-white">
                    Nurbek
                  </h2>
                  <h3 className="text-white mb-3">Web Full stek developer</h3>
                  <p className="mb-4 text-white">
                    Mrakazning eng tajribali dasturchisi 6 yildan oshiq malakaga
                    ega.
                  </p>
                  <span className="inline-flex">
                    <a className="ml-2 text-blue-600 text-2xl">
                      <ImFacebook2 />
                    </a>

                    <a
                      href="https://www.instagram.com/nurbekmakhmudov93/"
                      className="ml-2 text-2xl text-red-600"
                    >
                      <GrInstagram />
                    </a>
                    <a
                      href="https://t.me/NurbekMakhmudov"
                      className="ml-2 text-2xl text-blue-600"
                    >
                      <SiTelegram />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div
                data-aos="fade-up"
                className="bg-[#7dba28] rounded-xl h-full flex flex-col items-center text-center"
              >
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Ibratjon}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-white">
                    Ibratjon
                  </h2>
                  <h3 className="text-white mb-3"> Frontend developer</h3>
                  <p className="mb-4 text-white">
                    Frontend dasturlash va yuqori darajadadi tartib intizom ko'p
                    yillik tajriba.
                  </p>
                  <span className="inline-flex">
                    <a className="text-blue-600 text-2xl">
                      <ImFacebook2 />
                    </a>
                    <a className="ml-2 text-2xl text-red-600">
                      <GrInstagram />
                    </a>
                    <a
                      href="https://t.me/IBRATJON4469"
                      className="ml-2 text-2xl text-blue-600"
                    >
                      <SiTelegram />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div
                data-aos="fade-up"
                className="bg-[#7dba28] rounded-xl h-full flex flex-col items-center text-center"
              >
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Muhiddin}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-white">
                    Muhiddin
                  </h2>
                  <h3 className="text-white mb-3">Web Full stek developer</h3>
                  <p className="mb-4 text-white">
                    Full stek dasturchi bir biri bilan inoqalik va kuchli
                    dasturchi bolishni o'rgatadi.
                  </p>
                  <span className="inline-flex">
                    <a className="text-blue-600 text-2xl">
                      <ImFacebook2 />
                    </a>
                    <a
                      href="https://www.instagram.com/muhiddindev/"
                      className="ml-2 text-2xl text-red-600"
                    >
                      <GrInstagram />
                    </a>
                    <a
                      href="https://t.me/black_hole_225"
                      className="ml-2 text-2xl text-blue-600"
                    >
                      <SiTelegram />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div
                data-aos="fade-up"
                className="bg-[#7dba28] rounded-xl h-full flex flex-col items-center text-center"
              >
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Shohbozbek}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-white">
                    Shahbozbek
                  </h2>
                  <h3 className="text-white mb-3">Mobile developer</h3>
                  <p className="mb-4 text-white">
                    Mobil dastuchi va kompyuter sovodxonligi bo'yicha eng yaxshi
                    dasturchi.
                  </p>
                  <span className="inline-flex">
                    <a className="text-blue-600 text-2xl">
                      <ImFacebook2 />
                    </a>
                    <a
                      href="https://www.instagram.com/johnson_pub/"
                      className="ml-2 text-2xl text-red-600"
                    >
                      <GrInstagram />
                    </a>
                    <a
                      href="https://t.me/shohbozbek_dev"
                      className="ml-2 text-2xl text-blue-600"
                    >
                      <SiTelegram />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div
                data-aos="fade-up"
                className="bg-[#7dba28] rounded-xl h-full flex flex-col items-center text-center"
              >
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Durbek}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-white">
                    Durbek
                  </h2>
                  <h3 className="text-white mb-3">Frontend developer</h3>
                  <p className="mb-4 text-white">
                    Frontent boyicha yosh va eng yaxshi dasturchilardan bir.
                  </p>
                  <span className="inline-flex">
                    <a className="text-blue-600 text-2xl">
                      <ImFacebook2 />
                    </a>
                    <a
                      href="https://www.instagram.com/durbekdev/"
                      className="ml-2 text-2xl text-red-600"
                    >
                      <GrInstagram />
                    </a>
                    <a
                      href="https://t.me/durbek_dev"
                      className="ml-2 text-2xl text-blue-600"
                    >
                      <SiTelegram />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div
                data-aos="fade-up"
                className="bg-[#7dba28] rounded-xl h-full flex flex-col items-center text-center"
              >
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={Ibrohimjon}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-white">
                    Ibrohimjon
                  </h2>
                  <h3 className="text-white mb-3">Frontend developer</h3>
                  <p className="mb-4 text-white">
                    Frontend va kompyuter sovodxonligi boyicha dasturchi.
                  </p>
                  <span className="inline-flex">
                    <a className="text-blue-600 text-2xl">
                      <ImFacebook2 />
                    </a>
                    <a
                      href="https://www.instagram.com/ibrohimjon.___/"
                      className="ml-2 text-2xl text-red-600"
                    >
                      <GrInstagram />
                    </a>
                    <a
                      href="https://t.me/Rafikjanov7"
                      className="ml-2 text-2xl text-blue-600"
                    >
                      <SiTelegram />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
