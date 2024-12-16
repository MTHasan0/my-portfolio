
import React from 'react';
import { easeInOut, motion } from "motion/react";
import { div } from 'framer-motion/client';

const SliderMotion = () => {
    return (
        <div>
            <motion.div className=' fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]'

                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                exit={{
                    x: ['0%', '100%'],
                    width: ['0%', '100%']
                }} transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}>
                <div ></div>

            </motion.div>



        </div>
    );
};

export default SliderMotion;