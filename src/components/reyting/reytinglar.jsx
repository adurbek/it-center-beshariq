import React from "react";

export default function Reytinglar() {
  return (
    <>
      <section id="reyting" className="text-gray-600 body-font">
        <marquee
          data-aos="fade-left"
          scrollamount="10"
          className="sm:text-4xl text-white bg-[#7dba28] font-semibold text-2xl"
        >
          IT CENTER BESHARIQ. IT CENTER BESHARIQ. IT CENTER BESHARIQ. IT CENTER
          BESHARIQ. IT CENTER BESHARIQ. IT CENTER BESHARIQ. IT CENTER
          BESHARIQ.IT CENTER BESHARIQ. IT CENTER BESHARIQ. IT CENTER BESHARIQ.
        </marquee>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 ">
            <h1
              data-aos="fade-up"
              className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#7dba28]"
            >
              Reytinglar.
            </h1>
            <p
              data-aos="fade-up"
              className="lg:w-2/3 mx-auto leading-relaxed text-base"
            >
              Bizning markazimizdagi barcha hodimlar,o'quvchilar va ularning
              qilgan barcha ishlarini shu yerda jamlangan va hisoblangan.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div
              data-aos="fade-up"
              className="drop-shadow-2xl p-4 md:w-1/4 sm:w-1/2 w-full"
            >
              <div className="border-1 border-gray-200 px-4 py-6 rounded-lg transition duration-500 hover:bg-gray-100">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-[#7dba28] w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  8
                </h2>
                <p className="leading-relaxed">Hodimlar</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="drop-shadow-2xl p-4 md:w-1/4 sm:w-1/2 w-full"
            >
              <div className="border-gray-200 px-4 py-6 rounded-lg transition duration-500 hover:bg-gray-100">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-[#7dba28] w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  100
                </h2>
                <p className="leading-relaxed">O'quvchilar</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="drop-shadow-2xl p-4 md:w-1/4 sm:w-1/2 w-full"
            >
              <div className="border-gray-200 px-4 py-6 rounded-lg transition duration-500 hover:bg-gray-100">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-[#7dba28] w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6" />
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  100
                </h2>
                <p className="leading-relaxed">Loyihalar</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="drop-shadow-2xl p-4 md:w-1/4 sm:w-1/2 w-full"
            >
              <div className="border-gray-200 px-4 py-6 rounded-lg transition duration-500 hover:bg-gray-100">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-[#7dba28] w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  46
                </h2>
                <p className="leading-relaxed">Bizning ishlar</p>
              </div>
            </div>
          </div>
        </div>
        <marquee
          data-aos="fade-right"
          scrollamount="10"
          direction="right"
          className="sm:text-4xl text-white bg-[#7dba28] font-semibold text-2xl"
        >
          IT CENTER BESHARIQ. IT CENTER BESHARIQ. IT CENTER BESHARIQ. IT CENTER
          BESHARIQ. IT CENTER BESHARIQ. IT CENTER BESHARIQ. IT CENTER
          BESHARIQ.IT CENTER BESHARIQ. IT CENTER BESHARIQ. IT CENTER BESHARIQ.
        </marquee>
      </section>
    </>
  );
}
