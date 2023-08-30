import Link from 'next/link.js';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { data } from './data.js';
import { motion } from 'framer-motion';
import Sound from 'react-sound';
import ReactLoading from 'react-loading';
//import { Dots } from "react-activity";
//import "react-activity/dist/library.css";

const Jingles = ({close}) => {
    const [shouldShow, setShouldShow] = useState(true);
    const GroupRef = useRef([]);
    const onScroll = (el) => {
        const styles = GroupRef.current
            .map((group, i) => {
                const rect = group.getBoundingClientRect();
                return { group, rect };
        })
        .find((group) => group.rect.bottom >= window.innerHeight * 0.5);
        document.body.style.backgroundColor=`${styles.group.dataset.bgcolor}`;
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, []);

    function switchFunc(){
        setShouldShow(false)
        setTimeout(() => {
            setShouldShow(true)
        }, 10000)
    }
    return (
        <motion.div className='jingleBox' initial={{opacity: 0 }} animate={{opacity: 1 }} exit={{opacity: 0,x:-100 }} transition={{delay:0, ease:"easeOut", default: { duration: 0.7}}}>
            <div className='page1'>
                <img src='/image/logo.png' className='logoJingle' alt='logo'/>
                <img src='/image/crossBack.png' className='closeJingle' alt='close' onClick={() => close(false)} />
                <img src='/image/jingles/1.png' className='textJingle' alt='text' />
                <Link href='#jingle'>
                    <img src='/image/jingles/scrollButton.png' className='btnScrollJingle' alt='scrollBtn'/>
                </Link>
            </div>
            {data.map((group, i) => (
                <div ref={(el)=>(GroupRef.current[i] = el)} 
                    style={{height: "100vh" }}
                    data-bgcolor={group.theme.background}
                    className='jinglePage' id='jingle' key={group.index}>
                    <Sound url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'/>
                    <img src={group.close} className='closeJingle'  alt='close'  onClick={() => close(false)} />
                    <img src={group.title} className='titleJingle'  alt='title' />
                    {shouldShow ? (
                    <img src={group.play} className='playJingle' alt='play' onClick={() =>new Audio(group.sound).play() && switchFunc()}/>
                     ): (
                      <ReactLoading type={group.bars} color={group.activityIndicatorColor} className='playJingle'>
                        
                      </ReactLoading>
                    )}
                </div>
            ))}
        </motion.div>
      );
};

export default Jingles;                                 