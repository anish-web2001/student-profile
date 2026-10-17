import React, { useState } from 'react'
import { RiUserLine } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Subject from './Subject';
import StudentProfile from './StudentProfile';
import Academic from './Academic';
import Downloadable from './Downloadable';

const Dashbord = () => {
  const [state, setState] = useState('student');
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen bg-cover" style={{ backgroundImage: "url(/img/Background2.png)" }}>
      
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-green-900 text-white p-2 rounded-lg"
      >
        {open ? <ImCross /> : <GiHamburgerMenu />}
      </button>

      <div className="flex h-full ">
        <aside
          className={`
            fixed top-0 left-0 h-[90%] w-[260px] my-auto rounded-r-2xl bg-green-900 text-white
            transform transition-transform duration-300 ease-in-out z-40
            ${open ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:relative lg:flex-shrink-0
          `}
        >
          <div className="flex flex-col h-full">
            <div className="mt-8 text-center">
              <img src="/img/logo.png" alt="logo" className="h-20 mx-auto" />
              <h1 className="font-bold text-lg mt-4">OUR LADY OF THE HOLY</h1>
              <h1 className="font-bold text-lg">ROSARY SCHOOL</h1>
              <p className="font-normal text-sm">Student Portal</p>
            </div>

            <nav className="flex-1 mt-8 space-y-2">
              <div
                onClick={() => setState('student')}
                className={`cursor-pointer py-2 px-6 flex items-center gap-2 ${state === 'student' ? "bg-emerald-500 text-white" : "text-gray-300 hover:bg-emerald-600 hover:text-white"}`}
              >
                <RiUserLine className="text-xl" /> Student Profile
              </div>
              <div
                onClick={() => setState('subject')}
                className={`cursor-pointer py-2 px-6 flex items-center gap-2 ${state === 'subject' ? "bg-emerald-500 text-white" : "text-gray-300 hover:bg-emerald-600 hover:text-white"}`}
              >
                <IoMdBook className="text-xl" /> Subject
              </div>
              <div
                onClick={() => setState('academic')}
                className={`cursor-pointer py-2 px-6 flex items-center gap-2 ${state === 'academic' ? "bg-emerald-500 text-white" : "text-gray-300 hover:bg-emerald-600 hover:text-white"}`}
              >
                <MdOutlineStickyNote2 className="text-xl" /> Academic Records
              </div>
              <div
                onClick={() => setState('downloadable')}
                className={`cursor-pointer py-2 px-6 flex items-center gap-2 ${state === 'downloadable' ? "bg-emerald-500 text-white" : "text-gray-300 hover:bg-emerald-600 hover:text-white"}`}
              >
                <FiDownload className="text-xl" /> Download Forms
              </div>
            </nav>

            <div className="mb-6 px-6">
              <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                <HiOutlineLogout className="text-2xl" /> LOG OUT
              </Link>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6 overflow-y-auto mt-10 lg:mt-0">
          {state === 'student' ? <StudentProfile /> 
          : state === 'subject' ? <Subject /> 
          : state === 'academic' ? <Academic /> 
          : state === 'downloadable' ? <Downloadable /> 
          : null}
        </main>
      </div>
    </div>
  );
};

export default Dashbord;
