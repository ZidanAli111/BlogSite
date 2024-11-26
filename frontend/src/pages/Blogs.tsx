import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs, error } = useBlogs();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!blogs || blogs.length === 0) {
        return <div>No blogs available.</div>;
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-xl">
                    {blogs.map((blog) => (
                        <BlogCard
                        key={blog.id}
                            id={blog.id}
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"14th June 1997"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
