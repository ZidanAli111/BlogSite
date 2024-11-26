import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {

    return <div className="flex justify-between border-b-2 p-4 bg-gray-100">
        <div className="flex">
            <Link className="pr-6 text-4xl font-bold font-sans text-slate-600" to={"/blogs"}>
                BlogSite
            </Link>
            <div>
                <div className="w-full max-w-sm min-w-[300px] ">
                    <div className="relative">
                        <input
                            className="w-full  h-11 bg-white placeholder:text-slate-00 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Technology, Writing ..."
                        />
                        <button
                            className="absolute top-1 right-1 flex items-center mt-0.5 mr-1 rounded bg-slate-800 py-1 px-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                            </svg>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex">
           <Link  to={"/publish"}>
               <div className=" bg-gray-300 text-4xl mr-10 pb-1 w-[41px] text-center rounded-full shadow-lg hover:shadow-sm hover:shadow-slate-700">+</div>
           </Link>

            <Avatar name={"Zidan"} size={"big"} />
        </div>

    </div>
}