import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Publish = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
   const navigate=useNavigate();
    return (
        <div className="relative min-h-screen bg-gray">
            <Appbar />
            <span className="text-5xl text-gray-500 font-bold font-mono text-center block mx-auto mt-5">
                Add a new Blog
            </span>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center border shadow-md h-[500px] w-[900px] p-5 bg-gray-50">
                {/* Title Field */}
                <div className="flex items-center mb-10 w-full">
                    <div className="text-4xl text-right font-medium font-mono w-[120px]">Title:</div>
                    <input
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        type="text"
                        placeholder="Enter the title"
                        className="border shadow-md ml-10 pl-2 py-1 w-full h-[40px] min-w-[200px]" required
                    />
                </div>

                {/* Content Field */}
                <div className="flex items-start mb-10 w-full">
                    <div className="text-4xl text-right font-medium font-mono w-[120px] mt-1">Content:</div>
                    <textarea
                        onChange={(e) => {
                            setContent(e.target.value)
                        }}
                        placeholder="Enter the content"
                        className="border shadow-md ml-10 pl-2 pt-1 w-full h-[300px] min-w-[300px] resize-none" required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    onClick={async () => {
                    const response=  await  axios.post(`${BACKEND_URL}/api/v1/blog/create`, {
                            title,
                            content
                        },{
                            headers:{
                                Authorization:localStorage.getItem("token")
                            }
                        });
                        navigate(`/blog/${response.data.id}`)
                    }}
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-500 font-medium rounded-md text-sm px-5 py-2.5 w-[100px]"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};
