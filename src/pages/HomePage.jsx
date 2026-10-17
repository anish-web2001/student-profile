import React, { useState } from 'react'
import { PiStudent } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const onSubmitHandler = (value, helper) => {
    console.log(value);
    navigate("/dashboard")
    helper.resetForm()
  }

  const validationSchema = yup.object({
    number: yup.string().required("Number is required").matches(/^\d{10}$/, "Number must be 10 digits"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  })

  const initialState = {
    number: '',
    password: '',
    rememberMe: false
  }

  return (
    <div className='h-[100dvh] bg-cover bg-center flex flex-col' style={{ backgroundImage: "url(/img/Background.png)" }}>
      
      <nav className=" bg-opacity-80 text-white px-4 sm:px-8 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link className="flex items-center gap-2">
            <img src="/img/logo.png" alt="logo" className='h-10 sm:h-12' />
            <div className='flex flex-col text-[10px] sm:text-xs'>
              <span className="font-semibold text-sm sm:text-base md:text-lg">
                OUR LADY OF THE HOLY ROSARY SCHOOL
              </span>
              <span className='text-gray-200 text-[9px] sm:text-xs'>
                Member, Association of LASSAI Accredited Superschool (ALAS)
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex gap-6 font-medium text-sm sm:text-base">
            <li><Link to={""} className="hover:text-green-300">Home</Link></li>
            <li><Link to={""} className="hover:text-green-300">Discover</Link></li>
            <li><Link to={""} className="hover:text-green-300">Admission</Link></li>
            <li><Link to={""} className="hover:text-green-300">Contact Us</Link></li>
          </ul>

          <button 
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 bg-green-800 rounded-lg p-4 space-y-3 text-sm">
            <Link to={""} className="block hover:text-green-300">Home</Link>
            <Link to={""} className="block hover:text-green-300">Discover</Link>
            <Link to={""} className="block hover:text-green-300">Admission</Link>
            <Link to={""} className="block hover:text-green-300">Contact Us</Link>
          </div>
        )}
      </nav>


      <Formik onSubmit={onSubmitHandler} initialValues={initialState} validationSchema={validationSchema}>
        <div className='flex flex-grow justify-center items-center px-4'>
          <Form className='shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-2xl p-6'>

            <div className='flex justify-center'>
              <img src="/img/logo.png" alt="logo" className='h-16 sm:h-20 mt-2 rounded-xl' />
            </div>

            <h1 className='text-center text-2xl sm:text-3xl font-bold text-green-900 mt-3'>
              STUDENT <span className='font-normal'>PORTAL</span>
            </h1>

            <div className='flex gap-2 border-2 rounded-3xl bg-gray-100 border-gray-400 mt-6 px-3 py-2'>
              <PiStudent className='text-xl text-gray-500' />
              <Field name="number" id="number" placeholder='Student Number' className='outline-none bg-transparent w-full text-sm sm:text-base' />
            </div>
            <ErrorMessage component={'p'} className='text-red-500 text-xs ml-3' name='number' />

            <div className='flex gap-2 border-2 rounded-3xl bg-gray-100 border-gray-400 mt-4 px-3 py-2'>
              <CiLock className='text-xl text-gray-600' />
              <Field name="password" type="password" id="password" placeholder='Password' className='outline-none bg-transparent w-full text-sm sm:text-base' />
            </div>
            <ErrorMessage component={'p'} name='password' className='text-red-500 text-xs ml-3' />

            <div className='mt-5'>
              <button type='submit' className='rounded-3xl w-full bg-green-900 px-3 py-2 text-white cursor-pointer hover:bg-green-800 transition'>
                LOG IN
              </button>
              <div className='my-3 flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm gap-2'>
                <label className='flex gap-2 items-center'>
                  <Field type="checkbox" name="rememberMe" /> Remember me
                </label>
                <Link to={""} className='text-green-700 hover:underline'>Forget password?</Link>
              </div>
            </div>

            <div className='my-4'>
              <hr className='border-gray-300' />
            </div>

            <p className='text-xs sm:text-sm text-center'>
              Don't have an account? <Link to={""} className='text-green-700 font-medium hover:underline'>Register</Link>
            </p>
          </Form>
        </div>
      </Formik>
    </div>
  )
}

export default HomePage
