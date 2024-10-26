import { Auth } from "../components/Auth"
import { Info } from "../components/Info"

export const Signin=()=>{

    return <div className="min-h-screen flex  items-center justify-center bg-gray-100 px-4">
    <div className="max-w-6xl w-full bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row">
       <Auth type={"signin"}></Auth>
       <Info></Info>
    </div>
 </div>
}