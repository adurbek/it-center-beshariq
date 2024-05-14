import React from "react";
import html from './html.png'
import css from './css.png'
import js from './javascript.png'
import tailwind from "./tailwind.png"
import bootstrap from "./bootstrap.png"
import jsx from './jsx.png'
import python from './python.png'
import php from './php.png'
import mobile from './android.png'
import dj from './django.png'
import ui from "./ux-ui.png"
import github from "./github.png"

export default function Tillar() {
  return (
    <>
      <section className="p-11 text-gray-600 body-font">
        <h1
          data-aos="zoom-in-down"
          className="flex justify-center text-2xl font-bold text-[5vh] text-[#7dba28]"
        >
          Dasturlash tillari
        </h1>
        <div className="container px-20 py-20 mx-auto">
          <div data-aos="zoom-in-down" className="flex flex-wrap m-4">
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
                  src={html}
                />
              </div>
            </div>
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={css}
                />
              </div>
            </div>
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={js}
                />
              </div>
            </div>
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={tailwind}
                />
              </div>
            </div>
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={bootstrap}
                />
              </div>
            </div>
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={jsx}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container px-20  mx-auto">
          <div data-aos="zoom-in-down" className="flex flex-wrap m-4">
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2"
                  src={python}
                />
              </div>
            </div>
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={php}
                />
              </div>
            </div>
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={mobile}
                />
              </div>
            </div>
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={dj}
                />
              </div>
            </div>
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={ui}
                />
              </div>
            </div>
            <div className="lg:w-1/6 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={github}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
