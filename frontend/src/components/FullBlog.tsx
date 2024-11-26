import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog?: Blog }) => {

    if (!blog) {
        return <div>Loading blog details...</div>;
    }

    return <div >
        <Appbar />
        <div className="grid grid-cols-2 m-[80px] p-[60px] gap-40 items-center shadow-xl bg-white">
            <div >
                <div className="text-6xl font-bold pb-4">
                    {blog.title}
                </div>
                <div className="text-lg text-slate-400 font-medium pb-5">
                    {"Posted pm August 24,2023"}
                </div>
                <div className="text-lg text-slate-600 font-medium text-left ">
                    {blog.content}
                </div>
            </div>

            <div >
                <div className="text-3xl font-semibold text-gray-500">Author</div>
                <div className="flex">
                    <Avatar name={blog.author.name} size={"big"} />
                    <div className="text-xl font-bold pl-3">{blog.author.name}</div>
                </div>
                <div className="text-slate-500 font-normal font-serif">master of Magic, wizard king of the Land of Fire , and have the power of Solo Leveling.</div>
            </div>
        </div>
    </div>
}