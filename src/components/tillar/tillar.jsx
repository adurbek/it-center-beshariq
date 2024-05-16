import React from "react";
import html from "./html.png";
import css from "./css.png";
import js from "./javascript.png";
import tailwind from "./tailwind.png";
import bootstrap from "./bootstrap.png";
import jsx from "./jsx.png";
import python from "./python.png";
import php from "./php.png";
import mobile from "./android.png";
import dj from "./django.png";
import ui from "./ux-ui.png";
import github from "./github.png";

export default function Tillar() {
  return (
    <>
      <section className=" p-11 text-gray-600 body-font">
        <h1
          data-aos="zoom-in-down"
          className="flex justify-center py-20 text-2xl font-bold text-[5vh] text-[#7dba28]"
        >
          Dasturlash tillari
             
        </h1>

        <div
          data-aos="zoom-in-down"
          className="py-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap4"
        >
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={html}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={css}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={js}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={tailwind}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={bootstrap}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={jsx}
            />
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          className="py-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap4"
        >
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={python}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={php}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={mobile}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={dj}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={ui}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="testimonial"
              className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
              src={github}
            />
          </div>
        </div>

        
        
       
      </section>
    </>
  );
}
