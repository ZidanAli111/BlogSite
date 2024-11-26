import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b-2 cursor-pointer">
            <div className="font-medium flex items-center">
                <Avatar name={authorName} size={"small"}></Avatar>
                <div className="ml-2 text-lg ">{authorName} &#9679;
                </div>
                <div className="text-slate-400 pl-3">
                    {publishedDate}
                </div>
            </div>
            <div className="font-bold text-2xl mt-2">
                {title}
            </div>
            <div className="text-slate-600 font-medium mt-1">
                {content.slice(0, 200) + "..."}
            </div>
            <div className="text-slate-400 font-medium text-sm mb-2 mt-5 ">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </Link >
}

export function Avatar({ name, size = "small" }: { name: String, size: "big" | "small" }) {
    return <div className={`relative inline-flex items-center 
    justify-center overflow-hidden bg-gray-500 rounded-full ${size === "small" ? "w-7 h-7" : "w-11 h-13"}`}>
        <span className={`${size === 'small' ? "text-xs" : "text-2xl"} font-medium text-white text-center`}>
            {name[0]}
        </span>
    </div>
}
