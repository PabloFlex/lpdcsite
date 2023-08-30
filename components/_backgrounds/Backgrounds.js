import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import { setCookie } from 'cookies-next';

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCards } from "swiper";
// import { Pagination } from "swiper";
//import {StackedCarousel,ResponsiveContainer,} from "react-stacked-center-carousel";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import background from './backgroud.json'

const Backgrounds = ({close}) => {

    const [numback, setNumBack] = useState()
      const setting = {
          arrows: true,
          pagination: false,
          color:'white'
      };

    return (
        <AnimatePresence>
            <motion.div className='BackgroundsBox' initial={{opacity: 0, x:-100 }} animate={{opacity: 1, x:0  }} exit={{opacity: 0,x:-100 }} transition={{delay:0, ease:"easeOut", default: { duration: 0.5}}}>
                <img src='/image/crossBack.png' alt='close' className='close' onClick={() => close(false)}/>
                <img src='/image/background/title.png' alt='close' className='titleBg' />
              <Splide aria-label = "My Favorite Images" options = {setting} onMove = {() => console.log('move to')} >
                {background.map(background => {
                    return(              
                        <SplideSlide key = {background.id} onMouseOver = {() => setCookie('background', background.id)} >
                            <img src={background.url} alt='bg2' className='backgroundBg' />
                            <img src={background.description} alt='close' className='textBg' />
                        </SplideSlide>
                 )
                })} 
            </Splide>
            </motion.div>
        </AnimatePresence>
    );
};

export default Backgrounds;