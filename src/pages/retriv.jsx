import React from "react";
import tele from "./Telegram.webp";
import insta from "./Instagram.webp";
import phone from "./phone.png";
import joy from "./images.png";

export default function Retriv() {
  return (
    <>
      <section id="boglanish" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1
              data-aos="fade-up"
              className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#7dba28]"
            >
              Murojat qiling
            </h1>
            <p
              data-aos="fade-up"
              className="lg:w-2/3 mx-auto leading-relaxed text-base"
            >
              Bizga o'qishni hohlasangiz shu yerdagi manzillarimizga murojat
              qilishigiz mumkun.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div
              data-aos="fade-up"
              className="drop-shadow-2xl p-2 lg:w-1/4 md:w-1/2 w-full"
            >
              <a href="https://t.me/itcbeshariqbot_bot">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg transition duration-500 hover:bg-gray-100">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={tele}
                  />

                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Telegram
                    </h2>
                    <p className="text-gray-500">Bizning Telegram botmiz</p>
                  </div>
                </div>
              </a>
            </div>
            <div
              data-aos="fade-up"
              className="drop-shadow-2xl p-2 lg:w-1/4 md:w-1/2 w-full"
            >
              <a href="https://www.instagram.com/itcenterbeshariq/">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg transition duration-700 hover:bg-gray-100">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={insta}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Instagram
                    </h2>
                    <p className="text-gray-500">Bizning Instagram sahifamiz</p>
                  </div>
                </div>
              </a>
            </div>
            <div
              data-aos="fade-up"
              className="drop-shadow-2xl p-2 lg:w-1/4 md:w-1/2 w-full"
            >
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg transition duration-700  hover:bg-gray-100">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={phone}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    +998 99 837 52 14 <br /> +998 99 994 20 93
                  </h2>
                  <p className="text-gray-500">Bizning Telefon raqamlarimiz</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="drop-shadow-2xl p-2 lg:w-1/4 md:w-1/2 w-full"
            >
              <a href="https://www.google.com/maps/place/Beshariq+IT+CENTER+(Powered+by+IT+Park)/@40.4366727,70.6082832,99m/data=!3m1!1e3!4m6!3m5!1s0x38ba9b043b856e75:0x95c5af26c798a0c4!8m2!3d40.4363952!4d70.6081471!16s%2Fg%2F11rtpks__z?hl=uz&entry=ttu">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg transition duration-700 hover:bg-gray-100">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={joy}
                  />
                  <div className="flex-grow">
                    <h2 className="title-font font-medium text-[#7dba28]">
                      IT Center Beshariq
                    </h2>
                    <p className="text-gray-500">Bizning joylashgan joy</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
