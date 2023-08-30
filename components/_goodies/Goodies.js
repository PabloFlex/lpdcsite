import React from 'react';
import { motion } from 'framer-motion';

const Goodies = ({close}) => {
    return (
        <motion.div className='goodiesBox' initial={{opacity: 0, x:-100 }} animate={{opacity: 1, x:0  }} exit={{opacity: 0,x:-100 }} transition={{delay:0, ease:"easeOut", default: { duration: 0.5}}}>
            <img src='/image/crossBack.png' alt='close' className='close' onClick={() => close(false)} />
            <img src='/image/goodie/title.png' className='title' alt='goodies'/>
            <div className='elements'>
                <div className='s1'>
                <img src='/image/goodie/1.png' className='goodies' alt='goodies'/>
                <img src='/image/goodie/4.png' className='goodies' alt='goodies'/>
                <img src='/image/goodie/5.png' className='goodies' alt='goodies'/>
                </div>
                <div className='s2'>
                <img src='/image/goodie/2.png' className='goodies' alt='goodies'/>
                <img src='/image/goodie/3.png' className='goodies' alt='goodies'/>
                <a href="https://www.instagram.com/lapatatedouce_radio/" target="_blank" rel="noreferrer">
                    <img src='/image/goodie/insta.png' className='goodies' alt='goodies'/>
                </a>
                    
                </div>
            </div>

        </motion.div>
    );
};

export default Goodies;