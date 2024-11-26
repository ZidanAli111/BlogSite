import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {
    content: string;
    title: string;
    id: number;
    author: {
        name: string;
    };
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        })
            .then((response) => {
                setBlog(response.data.blog || []);
            })
            .catch((err) => {
                console.error("Error occur while fetching blog", err);
            })
            .finally(() => {
                setLoading(false);
            })

          
    }, [id]);
    return {
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((response) => {
                setBlogs(response.data.blog || []); // Default to empty array
            })
            .catch((err) => {
                console.error("Error fetching blogs:", err);
                setError("Failed to load blogs.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        loading,
        blogs,
        error,
    };
};
