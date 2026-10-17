import React from "react";
import { FiSearch, FiDownload } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { LuShipWheel } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineStickyNote2, MdErrorOutline } from "react-icons/md";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";

const Academic = () => {
  return (
    <section className="mt-10 px-4 sm:px-6 md:px-10">
      <div className="flex flex-col md:flex-row md:justify-end items-center gap-6 md:gap-10">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 shadow-sm shadow-gray-600 rounded-3xl">
            <FiSearch className="text-xl text-gray-500" />
            <input
              type="search"
              placeholder="Search"
              className="w-[150px] sm:w-[200px] md:w-[230px] outline-none text-sm"/>
          </div>
          <GoBell className="text-2xl text-gray-500" />
          <LuShipWheel className="text-2xl text-gray-500" />
        </div>
        <div className="flex items-center gap-4">
          <FaUserLarge className="border-2 text-5xl sm:text-6xl p-2 text-white bg-gray-300 border-green-900 rounded-full" />
          <div className="text-center md:text-left">
            <h1 className="text-lg sm:text-xl font-bold">JUAN DELA CRUZ</h1>
            <h2 className="text-sm sm:text-base">STEM 12</h2>
          </div>
        </div>
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl text-green-900 font-bold mt-5">
        <h1 className="flex items-center gap-2">
          <MdOutlineStickyNote2 className="text-3xl sm:text-4xl md:text-5xl" />
          ACADEMIC RECORD
        </h1>
      </div>
      <div className="mt-6 shadow-sm shadow-gray-500 w-full bg-white rounded-2xl">
        <div className="p-4 sm:p-6">
          <div className="flex flex-wrap gap-4">
            <div className="border border-gray-400 px-3 py-1 rounded-3xl text-gray-600">
              <div className="flex items-center gap-2 font-semibold">
                <HiAdjustmentsHorizontal className="text-xl" />
                <span className="hidden sm:inline">FILTERS:</span>
                <select className="outline-none text-sm sm:text-base">
                  <option>SENIOR HIGH SCHOOL</option>
                  <option>JUNIOR HIGH SCHOOL</option>
                  <option>SENIOR MIDDLE SCHOOL</option>
                  <option>JUNIOR MIDDLE SCHOOL</option>
                </select>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex justify-between text-lg md:text-2xl text-gray-500 font-semibold">
              <h1>FILES</h1>
              <div className="flex gap-3 md:gap-5">
                <button><FiDownload /></button>
                <button><MdErrorOutline /></button>
                <button><BsThreeDotsVertical /></button>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <object
                data="/pdf/123.pdf"
                type="application/pdf"
                className="shadow-sm shadow-gray-500 w-full h-72 sm:h-80 md:h-96 rounded-lg"
              ></object>
              <object
                data="/pdf/123.pdf"
                type="application/pdf"
                className="shadow-sm shadow-gray-500 w-full h-72 sm:h-80 md:h-96 rounded-lg"
              ></object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
