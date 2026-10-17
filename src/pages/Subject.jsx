import { IoMdBook } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { LuShipWheel } from "react-icons/lu";
import { FaUserLarge, FaRegSquareCheck } from "react-icons/fa6";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { MdCalendarToday } from "react-icons/md";

const Subject = () => {
  const subjects = [
    ["Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipinas", "24232201", "Iris dela Peña"],
    ["Understanding Culture, Society and Politics", "24232209", "Janice Bernardino"],
    ["Earth Science", "24232202", "Amelie Fuentes"],
    ["Physical Education", "24232208", "Maricar Constantino"],
    ["General Biology 2", "24232203", "Francesca Duran"],
    ["General Physics 1", "24232207", "John Rey Lozano"],
    ["General Chemistry 2", "24232204", "Angelica Peralta"],
    ["Entrepreneurship", "24232206", "Felix Vergara"],
    ["Practical Research 2", "24232205", "Kenneth Legaspi"],
    ["CLE (Special Topics 1)", "24232210", "Mary Grace Acosta"],
  ];

  return (
    <section className="mt-10 px-4">
      <div className="flex flex-col md:flex-row md:justify-end items-center gap-6 md:gap-10">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 shadow-sm shadow-gray-600 rounded-3xl">
            <FiSearch className="text-xl text-gray-500" />
            <input type="search" placeholder="Search" className="w-[150px] sm:w-[200px] md:w-[230px] outline-none text-sm"/>
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

      <div className="text-2xl md:text-4xl text-green-900 font-bold mb-5 flex items-center gap-2">
        <IoMdBook className="text-3xl md:text-5xl" /> SUBJECT
      </div>

      <div className="shadow-sm shadow-gray-500 w-full max-w-6xl bg-white rounded-2xl overflow-hidden mx-auto">
        <div className="p-4 md:p-6">
          <div className="flex flex-wrap gap-3 md:gap-5">
            <div className="border border-gray-500 px-4 py-1 rounded-full text-gray-600 font-semibold flex items-center gap-2 text-sm md:text-base">
              <HiAdjustmentsHorizontal className="text-xl" /> FILTERS
            </div>
            <div className="border border-gray-500 px-4 py-1 rounded-full text-gray-600 font-semibold flex items-center gap-2 text-sm md:text-base">
              <MdCalendarToday className="text-xl" /> Semester:
              <select className="outline-none bg-transparent">
                <option>FIRST</option>
                <option>SECOND</option>
                <option>THIRD</option>
                <option>FOURTH</option>
              </select>
            </div>
            <div className="border border-gray-500 px-4 py-1 rounded-full text-gray-600 font-semibold flex items-center gap-2 text-sm md:text-base">
              <FaRegSquareCheck className="text-xl" /> Status:
              <select className="outline-none bg-transparent">
                <option>Enrolled</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto mt-5">
            <table className="min-w-full text-xs md:text-sm lg:text-base">
              <thead className="bg-neutral-200">
                <tr>
                  <th className="px-4 md:px-6 py-2 font-semibold uppercase tracking-wide text-slate-600 text-left">
                    Subject
                  </th>
                  <th className="px-4 md:px-6 py-2 font-semibold uppercase tracking-wide text-slate-600 text-center">
                    Schedule Code
                  </th>
                  <th className="px-4 md:px-6 py-2 font-semibold uppercase tracking-wide text-slate-600 text-center">
                    Teacher
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {subjects.map(([subject, code, teacher]) => (
                  <tr key={code} className="hover:bg-slate-50">
                    <td className="px-4 md:px-6 py-2 truncate">{subject}</td>
                    <td className="px-4 md:px-6 py-2 font-mono underline text-green-900 text-center">
                      {code}
                    </td>
                    <td className="px-4 md:px-6 py-2 text-center">{teacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-4 max-w-6xl mx-auto">
        <button className="w-full md:w-1/2 py-2 text-white font-semibold text-sm md:text-lg cursor-pointer rounded-full bg-green-900">
          ENROLL SUBJECT
        </button>
        <button className="w-full md:w-1/2 py-2 text-white font-semibold text-sm md:text-lg cursor-pointer rounded-full bg-green-900">
          DROP SUBJECT
        </button>
      </div>
    </section>
  );
};

export default Subject;
