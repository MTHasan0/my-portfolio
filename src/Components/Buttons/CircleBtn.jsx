import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowRight, FaCircleNotch, FaProductHunt } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CircleBtn = () => {
    return (
        <div className=' mx-auto xl:mx-0 '>

            <Link to={'/work'} className=' relative w-[120px] h-[120px]  mx-auto xl:mx-0 flex justify-center items-center group' ><FaCircleNotch className=' text-8xl  animate-spin-slow text-rose-500 group-hover:text-white '></FaCircleNotch>
                <FaArrowRight className=' absolute  text-3xl group-hover:translate-x-2 transition-all duration-500 group-hover:text-rose-500 '>Projects</FaArrowRight>
            </Link>
        </div>
    );
};

export default CircleBtn;