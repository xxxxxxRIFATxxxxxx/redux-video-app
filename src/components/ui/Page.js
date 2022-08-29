import React from 'react';

const Page = ({number, page, handlePageChange}) => {
    const style = number === page ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
    return (
        <div 
            className={style}
            onClick={() => {handlePageChange(number)}}
        >
            {number}
        </div>
    );
};

export default Page;