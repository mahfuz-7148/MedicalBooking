import React from 'react';
import {useLoaderData} from "react-router";
import Blog from "../components/Blog.jsx";

const Blogs = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            {
                data.map(blog => (
                    <Blog blog={blog}/>
                ))
            }
        </div>
    );
};

export default Blogs;