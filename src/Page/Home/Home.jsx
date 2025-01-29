import React from 'react';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';
import CircleBtn from '../../Components/Buttons/CircleBtn';
import BgAnimation from './BgAnimation';
import homeImage from '../../assets/man.png';

const Home = () => {
    return (
        <div className=' text-white text-xl'>

            <SliderMotion></SliderMotion>
            <div>
                <div className=' w-full h-full '>
                    {/* Banner text */}
                    <div className=' flex text-center flex-col justify-center  pt-40 xl:pt-40 xl:text-left h-full container mx-auto '>
                        <motion.div initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 100 }}
                            transition={{ duration: 0.5, delay: 1 }}>
                            <p className=' text-3xl xl:text-5xl'>Hey this is
                                <span className=' text-4xl xl:text-7xl font-bold text-rose-500'> TANVIR</span> <br /> an web developer...
                            </p><br />
                            <p className=' max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.</p>
                        </motion.div>

                        {/* btn */}
                        <div className=' text-white'>
                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ duration: 0.8, delay: 1.5 }}>
                                <CircleBtn></CircleBtn>

                            </motion.div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Bg Image */}

            <div className=' w-[1200px] h-full absolute right-0 bottom-0'>

                <div className=' bg-none hidden xl:flex  xl:bg-cover xl:bg-explosion xl:bg-right  xl:bg-no-repeat  w-full h-full translate-z-0'>
                    <div className='  max-w-md flex absolute right-32 bottom-24  '>

                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 100 }}
                            transition={{ duration: 0.8, delay: 1.5 }}>
                            <img src={homeImage}></img>

                        </motion.div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;