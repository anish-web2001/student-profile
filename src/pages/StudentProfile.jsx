import { RiUserLine } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { LuShipWheel } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import { PiBankBold } from "react-icons/pi";
import { BsCreditCard } from "react-icons/bs";
import { PiMoneyFill } from "react-icons/pi";
import { FaPesoSign } from "react-icons/fa6";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const StudentProfile = () => {
  return (
    <>
    
    <section className='flex-1 mt-5 lg:my-18 L px-4'>
            {/* 1st div  */}
            <div className='flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-10'>
                <div className='text-2xl lg:text-4xl text-green-900 ml-7 font-bold mt-8'>
                    <h1 className='flex gap-2 items-center'><RiUserLine className='text-3xl lg:text-5xl'/>STUDENT PROFILE</h1>
                </div>

            <div className='flex flex-wrap gap-5 items-center'>
              <div className='flex items-center gap-2 shadow-sm shadow-gray-600 rounded-full px-3 py-1'>
                <FiSearch className='text-xl text-gray-500' />
                <input type="search" placeholder='Search' className='w-[150px] lg:w-[230px] outline-none text-sm lg:text-base' />
              </div>
              <button><GoBell className='text-xl lg:text-2xl text-gray-500' /></button>
              <button><LuShipWheel className='text-xl lg:text-2xl text-gray-500' /></button>
              <FaUserLarge className='border-2 text-4xl lg:text-6xl text-white bg-gray-300 border-green-900 rounded-full p-1' />
              <div>
                <h1 className='text-base lg:text-xl font-bold'>JUAN DELA CRUZ</h1>
                <h2 className='text-sm lg:text-base text-center'>STEM 12</h2>
              </div>
            </div>
            </div>

            {/* 2nd div */}
            <div className='flex flex-col xl:flex-row gap-10 mt-2'>
             <div className='flex-1'>
                <div className='mt-5 shadow-sm shadow-gray-500 w-full lg:w-[600px] h-auto lg:h-[535px] overflow-hidden bg-white rounded-2xl'>
                <div className='px-5 lg:px-8 pt-5'>
                    <div className='flex justify-between'>
                        <Link to={""} className='flex gap-2 text-green-900 font-semibold items-center'>
                            <FaUserLarge className='border-2 border-green-900 rounded text-xl lg:text-2xl'/>
                            <h1 className='tex-xl lg:text-xl'>User Information</h1>
                        </Link>
                        <div className='text-green-700 text-sm lg:text-xl font-semibold'>
                            <Link to={""}>See all</Link>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-5 mt-4'>
                        <FaUserLarge className='text-[80px] lg:text-[100px] pt-2 border border-green-900 bg-gray-300 text-white rounded-full p-2 mx-auto sm:mx-0'/>
                        <div className='text-sm lg:text-[16px] space-y-1 font-bold'>
                            <h1>STUDENT NUMBER: <span className='font-normal'>963165282</span></h1>
                            <h1>LEARNER REFERENCE NUMBER: <span className='font-normal'>2108444842</span></h1>
                            <h1>NAME: <span className='font-normal'>Juan dela Cruz</span></h1>
                            <h1>GRADE/YEAR: <span className='font-normal'>STEM 12</span></h1>
                            <h1>SECTION: <span className='font-normal'>St. Barbara</span></h1>
                        </div>
                    </div>
                    <div className='text-gray-300 my-5'>
                        <hr />
                    </div>
                    <div className='flex flex-col gap-3 text-sm lg:text-[18px]'>
                        <div className=''>
                            <h1 className='font-bold'>Address</h1>
                            <p>Block 0 Lot South Square Village, Pasong Kawawyan ||, City of Gen. Trias, Cavite</p>
                        </div>
                        <div className=''>
                            <h1 className='font-bold'>Contact Number</h1>
                            <p>9934567890</p>
                        </div>
                        <div className=''>
                            <h1 className='font-bold'>Email Address</h1>
                            <p>juandelacruz@gmail.com</p>
                        </div>
                        <div className=''>
                            <h1 className='font-bold'>OLHRS Email Address</h1>
                            <p>juandekacruz@olhrs.edu.ph</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className='w-full lg:w-[600px] mt-3 cursor-pointer bg-green-900 py-2 rounded-full font-semibold text-sm lg:text-xl text-white'>UPDATE PRESONAL INFORMATION</button>
            </div>
             </div>

            <div>
                <div className='shadow-sm shadow-gray-500 h-auto w-full lg:h-[330px] lg:w-[520px] mt-5 rounded-2xl bg-white'>
                    <div className='p-5'>
                        <div className='flex justify-between'>
                            <Link to={""} className='flex gap-2 text-green-900 font-semibold'>
                                <PiBankBold className='rounded text-2xl mt-1'/>
                                <p className='text-xl'>Financial Information</p>
                            </Link>
                            <div className='text-green-700 text-xl font-semibold'>
                                <Link to={""}>See all</Link>
                            </div>
                        </div>

                        <div className='flex mt-10 justify-center gap-10'>
                            <div className='flex flex-col items-center'>
                                <div className='border-[10px] border-green-700 w-25 h-25 rounded-full mt-5 flex justify-center items-center text-3xl text-green-900'>
                                    <BsCreditCard className=''/>
                                </div>
                                <div className='mt-5'>
                                    <h1 className='text-3xl font-bold flex gap-2 text-center'><FaPesoSign className='mt-1'/> 0.00</h1>
                                    <p className='text-[14px] text-center'>Total Amount Payable</p>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='border-[10px] border-green-700 w-25 h-25 rounded-full mt-5 flex justify-center items-center text-3xl text-green-900'>
                                    <PiMoneyFill className=''/>
                                </div>
                                <div className='mt-5'>
                                    <h1 className='text-3xl font-bold flex gap-2'><FaPesoSign className='mt-1 text-center'/> 5000.00</h1>
                                    <p className='text-[14px] text-center'>Total Amount Paid</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shadow-sm shadow-gray-500 h-auto w-full lg:h-[240px] lg:w-[520px] mt-5 rounded-2xl bg-white'>
                    <div className='flex justify-center items-center gap-10 p-5 pt-10'>
                        <div>
                            <h1 className='text-3xl font-medium'> Class Schedule</h1>
                            <button className=' text-white bg-green-900 py-1 px-8 rounded-4xl mt-3 cursor-pointer'>VIEW</button>
                        </div>
                        <div className='text-9xl text-green-900'>
                            <RiCalendarScheduleLine/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </section>
    
    </>
  )
}

export default StudentProfile