import React from "react";
import seezntv from "./image.avif"
import nitcuz from "./image.png"
import macmarket from "./Mac Market.jpg.png"

export default function Portfolio() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2
                data-aos="fade-up"
                className="text-2xl font-bold text-[#7dba28] lg:text-3xl"
              >
                Portfolio
              </h2>
            </div>
            <a
              href="#"
              className="inline-block rounded-lg border bg-[#7dba28] px-4 py-2 text-center text-sm font-semibold text-white hover:text-black outline-none ring-indigo-300 transition duration-100 hover:bg-white focus-visible:ring active:bg-gray-200 hover:border-green-400 md:px-8 md:py-3 md:text-base"
            >
              Web site
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src={nitcuz}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                NITC
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-900 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src={seezntv}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                SEEZN TV
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src={macmarket}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Dev
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src={macmarket}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                MAC MARKET
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* <div
        data-aos="fade-up"
        className="flex justify-center sm:text-3xl text-2xl font-medium title-font mb-4 text-[#7dba28] "
      >
        Portfolio
      </div>

      <div className="flex justify-center  ">
        <div className="flex flex-col md:flex-row space-y-2  items-center justify-center max-w-7xl w-full p-4">
          <div
            data-aos="flip-right"
            className="w-full md:w-1/2 mx-2 h-96  overflow-hidden  "
          >
            <img src={seezntv} alt="" className="bg-gray-200 h-full w-full" />
          </div>
          <div className="w-full md:w-1/2 mx-2 h-96 ">
            <div data-aos="flip-right" className="flex flex-col space-y-2">
              <div className="h-48 w-full   overflow-hidden  ">
                <img
                  src={nitcuz}
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <div className="h-48 w-full flex space-x-1 p-2">
                <div
                  data-aos="flip-right"
                  className="h-full w-1/2 overflow-hidden  "
                >
                  <img
                    src={macmarket}
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <div
                  data-aos="flip-right"
                  className="h-full w-1/2  overflow-hidden  "
                >
                  <img
                    src="https://source.unsplash.com/random/200x200/?man"
                    alt=""
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
