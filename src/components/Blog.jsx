import React from 'react';

const Blog = ({ data }) => {
  const { id, question, answer } = data;

  return (
    <div className="bg-white p-5 rounded-2xl space-y-4 shadow-md">
      <h1 className="text-xl font-bold">{id}Q. {question}</h1>
      <div className="border-[1px] border-dashed border-gray-400 my-2"></div>
      <p className="text-gray-700"><span className='font-bold'>Answer: </span>{answer}</p>
    </div>
  );
};

export default Blog;
