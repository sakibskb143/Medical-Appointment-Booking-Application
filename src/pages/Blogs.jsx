import React from "react";
import Nav from "../components/Nav";
import { useLoaderData } from "react-router";
import Blog from "../components/Blog";

const Blogs = () => {
  const questionAns = useLoaderData();
  return <div className="py-10 flex flex-col gap-5">
    {
        questionAns.map(data =><Blog key={data.id} data={ data}></Blog> )
    }
    </div>;
};

export default Blogs;
