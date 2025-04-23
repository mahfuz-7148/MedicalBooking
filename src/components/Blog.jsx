import React from 'react';

const Blog = ({blog}) => {
    const {question, answer,addedAt } = blog || {}
    return (
      <>
          <div className='rounded-4xl my-10 p-5 bg-white space-y-5'>
              <h1 className='text-3xl'>{question}</h1>
              <p className='border-b border-dashed border-[#0F0F0F33]'></p>
              <p className='text-black text-xl'><span className='text-blue-400 text-xl'>Answer:</span> <br/>
                  {answer}</p>
              <p className='border-b border-dashed border-[#0F0F0F33]'></p>
              <p className='text-gray-400 text-xl'><i class="ri-calendar-schedule-line"></i> Added at {addedAt}</p>
          </div>

      </>
    );
};

export default Blog;