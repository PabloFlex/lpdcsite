import React from 'react';
import { motion } from 'framer-motion';

const Selections = ({close}) => {
    return (
        <motion.div className='slectionsBox' initial={{opacity: 0, x:-100 }} animate={{opacity: 1, x:0  }} exit={{opacity: 0,x:-100 }} transition={{delay:0, ease:"easeOut", default: { duration: 0.5}}}>
            <img src='/image/crossBack.png' alt='close' className='close' onClick={() => close(false)} />
            <h1 className='titleMain'>
             <img src='/image/selection/title.svg' alt="Playlist"></img>
            </h1>
            <p> DÉCOUVREZ NOS PLAYLISTS SUR SPOTIFY </p>
            <div className='mixtape n1'>
                 <img src='/image/selection/main.png' alt='album' className='imgMixtape' />
                <a href = "https://open.spotify.com/user/31jtgdnr2bmjias4xxsxxpueplhu?si=00496f41aedb4a8d" target = "_blank" rel = "noreferrer"style = {{fontFamily: 'FuturaBold',color: '#F5ECC4',backgroundColor: '#3F64D4',borderRadius: 40.9,width:188,height:71,marginTop:20}}>
                  <h2 style ={{fontSize:25}}>ÉCOUTER ►</h2>
                </a>
            </div>
        </motion.div>
    );
};

export default Selections;