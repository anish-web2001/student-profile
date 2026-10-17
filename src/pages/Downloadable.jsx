import React from 'react'
import { RiUserLine } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { LuShipWheel } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { MdErrorOutline } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from 'react-router-dom';

const Downloadable = () => {
  return (
    <>
      <section className="mt-10 px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-end items-center gap-6 md:gap-10">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 shadow-sm shadow-gray-600 rounded-3xl">
              <FiSearch className="text-xl text-gray-500" />
              <input
              type="search"placeholder="Search" className="w-[150px] sm:w-[200px] md:w-[230px] outline-none text-sm"/>
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
        <div className="text-2xl md:text-4xl text-green-900 font-bold mt-5">
          <h1 className="flex items-center gap-2">
            <MdOutlineFileDownload className="text-3xl md:text-5xl" />
            DOWNLOAD FORMS
          </h1>
        </div>
        <div className="mt-5 shadow-sm shadow-gray-500 w-full max-w-[1150px] min-h-[400px] md:h-[550px] bg-white rounded-2xl">
          <div className="p-4 md:p-6">
            <div className="flex gap-3">
              <div className="border border-gray-500 px-2 md:px-3 rounded-4xl py-1 text-gray-500">
                <div className="flex gap-2 md:gap-3 font-semibold items-center">
                  <HiAdjustmentsHorizontal className="text-xl md:text-2xl" /> 
                  <span className="text-sm md:text-base">FILTERS:</span>
                  <select className="outline-none text-sm md:text-base">
                    <option value="">Register</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex justify-between text-lg md:text-2xl text-gray-500 font-semibold">
                <h1>FILES</h1>
                <div className="flex gap-3 md:gap-5">
                  <button><FiDownload /></button>
                  <button><MdErrorOutline /></button>
                  <button><BsThreeDotsVertical /></button>
                </div>
              </div>
              <div className="mt-5 md:mt-10 flex flex-col md:flex-row gap-5 md:gap-10">
                <object
                  data="/pdf/123.pdf"
                  type="application/pdf"
                  className="shadow-sm shadow-gray-500 p-2 md:p-5 w-full md:w-1/2 h-64 md:h-80"
                ></object>
                <object
                  data="/pdf/123.pdf"
                  type="application/pdf"
                  className="shadow-sm shadow-gray-500 p-2 md:p-5 w-full md:w-1/2 h-64 md:h-80"
                ></object>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Downloadable
